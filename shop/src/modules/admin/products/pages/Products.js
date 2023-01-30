import { Outlet } from "react-router-dom";
import React from "react";
import CategoriesProvider from "../../../common/categories/providers/CategoriesProvider";
import ProductsProvider from "../../../common/products/providers/ProductsProvider";

function Products() {
  return (
    <CategoriesProvider>
      <ProductsProvider>
        <Outlet />
      </ProductsProvider>
    </CategoriesProvider>
  );
}

export default Products;
