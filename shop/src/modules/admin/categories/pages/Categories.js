import { IconButton } from "@mui/material";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import CategoriesProvider from "../../../common/categories/providers/CategoriesProvider";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
function Categories() {
  return (
    <div>
      <CategoriesProvider>
        <Outlet />
        <IconButton component={NavLink} to="new">
          <AddCircleOutlineIcon />
        </IconButton>
      </CategoriesProvider>
    </div>
  );
}

export default Categories;
