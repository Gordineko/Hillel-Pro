import { Box } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import ProtectedRout from "../common/auth/components/ProtectedRout";
import LeftNav from "./common/component/LeftNav";
import TopBar from "./common/component/TopBar";

function AdminApp() {
  return (
    <div>
      <ProtectedRout roles={["admin", "sales"]}>
        <TopBar />
        <LeftNav />
        <Box maxWidth="lg" sx={{ mt: 10, ml: 25 }}>
          <Outlet />
        </Box>
      </ProtectedRout>
    </div>
  );
}

export default AdminApp;
