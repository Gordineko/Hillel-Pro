import { useEffect, useState } from "react";
import api from "../../../../api";

export default function useCategoriesProvider() {
  const [list, setList] = useState([]);

  function fetchCategories() {
    return api.get("categories").then(({ data }) => setList(data));
  }

  function removeCategories(id) {
    return api.delete("categories/" + id).then(fetchCategories);
  }
  function createCategories(newCategory) {
    return api.post("categories/", newCategory).then(fetchCategories);
  }
  function updatedCategories(updatedCategory) {
    return api
      .put("categories/" + updatedCategory.id, updatedCategory)
      .then(fetchCategories);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return { list, removeCategories, createCategories, updatedCategories };
}
