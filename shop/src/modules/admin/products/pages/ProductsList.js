import { NavLink } from "react-router-dom";
import React from "react";
import useProductsList from "../../../common/products/hooks/useProductsList";
import CategoryName from "../components/CategoryName";
import { Button } from "@mui/material";
import useProductsProvider from "../../../common/products/hooks/useProductsProvider";

function ProductsList() {
  const { list, removeProduct } = useProductsProvider();
  return (
    <div>
      <ul>
        {list.map((product) => (
          <li key={product.id}>
            <NavLink to={"./" + product.id}>
              {product.title} - {product.categoryId} -
              <CategoryName id={product.categoryId} />
            </NavLink>
            <Button
              color="error"
              onClick={() => {
                removeProduct(product.id);
              }}
            >
              Dell
            </Button>
          </li>
        ))}
      </ul>
      <NavLink to="./new">Add new</NavLink>
    </div>
  );
}

export default ProductsList;
