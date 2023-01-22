import React from "react";
import { Outlet } from "react-router-dom";
import ProtectedRout from "../common/auth/components/ProtectedRout";

function AdminApp() {
  return (
    <div>
      <ProtectedRout roles={["admin", "sales"]}>
        <Outlet />
      </ProtectedRout>
    </div>
  );
}

export default AdminApp;
