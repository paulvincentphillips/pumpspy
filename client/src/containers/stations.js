import React, { useState, useEffect } from "react";
import StationGrid from "../components/stations/index";

export const StationsContainer = ({ isAuthenticated }) => {
  const [stations, setStations] = useState([]);
  const [selectedCounty, setSelectedCounty] = useState({
    value: "Clare",
    label: "Clare",
  });
  const [selectedTown, setSelectedTown] = useState({
    value: "",
    label: "All Stations",
  });

  const county = [{ value: "Clare", label: "Clare" }];

  const town = [
    { value: "", label: "All Stations" },
    { value: "Ennis", label: "Ennis" },
    { value: "Shannon", label: "Shannon" },
    { value: "Clarecastle", label: "Clarecastle" },
    { value: "Ennistymon", label: "Ennistymon" },
    { value: "Darragh North", label: "Darragh North" },
    { value: "Killaloe", label: "Killaloe" },
    { value: "Lissycasey", label: "Lissycasey" },
    { value: "Kilmihil", label: "Kilmihil" },
    { value: "Kilrush", label: "Kilrush" },
    { value: "Tulla", label: "Tulla" },
    { value: "Corofin", label: "Corofin" },
    { value: "Liscannor", label: "Liscannor" },
    { value: "Corbally", label: "Corbally" },
    { value: "Mountshannon", label: "Mountshannon" },
    { value: "Miltown Malbay", label: "Miltown Malbay" },
    { value: "Sixmilebridge", label: "Sixmilebridge" },
    { value: "Scarriff", label: "Scarriff" },
  ];

  const updateTown = async (town) => {
    setSelectedTown(town);
  };

  const getStations = async () => {
    try {
      const response = await fetch("/api/stations");
      let jsonData = await response.json();

      jsonData = jsonData.sort(
        (a, b) => a.petrol - b.petrol || a.diesel - b.diesel
      );
      jsonData = jsonData.sort((a, b) => {
        return new Date(b.updated) - new Date(a.updated);
      });

      setStations(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  const updatePrice = (id, fuelType, price) => {
    let updatedStations = stations.map((station) =>
      station.station_id === id ? { ...station, [fuelType]: price } : station
    );
    setStations(updatedStations);
    updateDatabasePrice(id, fuelType, price);
  };

  const updateDatabasePrice = async (id, fuelType, price) => {
    try {
      const body = { price };
      await fetch(`/api/stations/${fuelType}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  const formatDate = (date) => {
    date = date.replace(/T.*/, "");
    return date.split("-").reverse().join("-");
  };

  useEffect(() => {
    getStations();
  }, []);

  const filterString = `${selectedTown.value}, Co. ${selectedCounty.value}`;

  return (
    <StationGrid>
      <StationGrid.DropdownContainer>
        <StationGrid.Dropdown
          value={selectedCounty}
          onChange={(e) => setSelectedCounty(e)}
          options={county}
          isSearchable={false}
        />
        <StationGrid.Dropdown
          value={selectedTown}
          onChange={(e) => updateTown(e)}
          options={town}
          isSearchable={false}
        />
      </StationGrid.DropdownContainer>
      {stations.filter(station => station.address.includes(filterString)).map(item => {
        return(
        <StationGrid.StationRow key={item.station_id}>
          <StationGrid.LogoContainer>
            <StationGrid.Logo
              src={`images/logos/${item.brand.toLowerCase()}.png`}
              alt={item.alt}
            />
          </StationGrid.LogoContainer>

          <StationGrid.InfoBox>
            <StationGrid.StationInfo>{item.name}</StationGrid.StationInfo>
            <StationGrid.StationInfo>{item.address}</StationGrid.StationInfo>
            <StationGrid.StationInfo>
              Last Updated: {formatDate(item.updated)}
            </StationGrid.StationInfo>
          </StationGrid.InfoBox>
          <StationGrid.PriceBox>
            <StationGrid.PriceRow>
              <StationGrid.Price fuelPrice={item.petrol}>
                Petrol:{" "}
              </StationGrid.Price>
              <StationGrid.EditButton
                src={"images/icons/edit.png"}
                alt="edit-button"
                isAuthenticated={isAuthenticated}
              />
              <StationGrid.Modal
                id={item.station_id}
                price={item.petrol}
                fuelType={"petrol"}
                updatePrice={updatePrice}
              />
            </StationGrid.PriceRow>
            <StationGrid.PriceRow>
              <StationGrid.Price fuelPrice={item.diesel}>
                Diesel:{" "}
              </StationGrid.Price>
              <StationGrid.EditButton
                src={"images/icons/edit.png"}
                alt="edit-button"
                isAuthenticated={isAuthenticated}
              />
              <StationGrid.Modal
                id={item.station_id}
                price={item.diesel}
                fuelType={"diesel"}
                updatePrice={updatePrice}
              />
            </StationGrid.PriceRow>
          </StationGrid.PriceBox>
        </StationGrid.StationRow>
      )})}
    </StationGrid>
  );
};
