import React from "react";
import useCategories from "../../../common/categories/hooks/useCategoriesProvider";
import { DataGrid } from "@mui/x-data-grid";
import CategoriesTable from "./CategoriesTable";
import { Outlet } from "react-router-dom";

const columns = [];
function CategoriesList() {
  return (
    <div>
      <CategoriesTable />
      <Outlet />
    </div>
  );
}

export default CategoriesList;
