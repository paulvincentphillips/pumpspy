-- CREATE DATABASE pumpspy;

CREATE TABLE stations(
    station_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    brand VARCHAR(20),
    address VARCHAR(250),
    updated date,
    petrol REAL,
    diesel REAL,
    lat FLOAT,
    lon FLOAT
);

INSERT INTO stations (name, brand, address, updated, petrol, diesel, lat, lon)
VALUES('Texaco Lahinch Road','Texaco','Texaco, Lahinch Road, County Clare','2021-09-16','155.0','155.0','52.8571209','-9.0156949');