import React from "react";
import { Route } from "react-router-dom";
import { PATHS } from "../constant";
import LandingPage from "../pages/LandingPage";


const Routing = () => {
  return (
    <>
      {/* Public routes */}
      {/* Route home page to login in  */}
      <Route exact path={PATHS.HOME_PATH} component={LandingPage} />
      {/* Private routes */}
      {/* <PrivateRoute exact path={PATHS.PATH} component={Component} /> */}
    </>
  );
};

export default Routing;
