import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <Fragment>
      <div>Day la Menu Admin</div>
      <Outlet />
    </Fragment>
  );
};

export default DashboardLayout;
