import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import useUser from "../../../common/auth/hooks/useUser";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";
function TopBar() {
  const user = useUser();
  return (
    <AppBar position="absolute">
      <Toolbar
        sx={{
          pl: "24px",
        }}
      >
        <Typography
          component="h1"
          variant="h3"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        ></Typography>
        <Typography variant="h6">{user.email}</Typography>
        <IconButton color="inherit" component={NavLink} to="/auth/logout">
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
