import { useContext } from "react";
import { CategoriesContext } from "../providers/CategoriesProvider";

export default function useCategories() {
  const value = useContext(CategoriesContext);

  if (value === null) {
    throw new Error("фывф");
  }
  return value;
}
