import React, { useEffect, useState } from "react";
import AuthGuard from "src/auth/AuthGuard";

const Dashboard = () => {
  return <AuthGuard>DashboardAdmin</AuthGuard>;
};

export default Dashboard;
