import React from "react";
import { Route } from "react-router-dom";
import { PATHS } from "../constant";
import LandingPage from "../pages/LandingPage";
import DownloadPage from "../pages/Download";
import HowToUse from "../pages/HowToUse";

const Routing = () => {
  return (
    <>
      {/* Public routes */}
      {/* Route home page to login in  */}
      <Route exact path={PATHS.HOME_PATH} component={LandingPage} />
      <Route exact path={PATHS.DOWNLOAD} component={DownloadPage} />
      <Route exact path={PATHS.HOW_TO_USE} component={HowToUse} />
      {/* Private routes */}
      {/* <PrivateRoute exact path={PATHS.PATH} component={Component} /> */}
    </>
  );
};

export default Routing;
