import React from "react";
import { HeaderContainer } from "../containers/header";
import { StationsContainer } from "../containers/stations";

const Home = ({ setAuth, isAuthenticated }) => {
  return (
    <>
      <HeaderContainer setAuth={setAuth} isAuthenticated={isAuthenticated} />
      <StationsContainer isAuthenticated={isAuthenticated} />
    </>
  );
};

export default Home;
