import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminApp from "./modules/admin/AdminApp";
import CategoriesList from "./modules/admin/categories/components/CategoriesList";
import Categories from "./modules/admin/categories/pages/Categories";
import NewCategory from "./modules/admin/categories/pages/NewCategory";
import Dashboard from "./modules/admin/dashboard/pages/Dashboard";
import Products from "./modules/admin/products/pages/Products";
import ProductsList from "./modules/admin/products/pages/ProductsList";
import ProductsForm from "./modules/admin/products/pages/ProductsForm";
import Auth from "./modules/common/auth/pages/Auth";
import Login from "./modules/common/auth/pages/Login";
import Logout from "./modules/common/auth/pages/Logout";
import Singup from "./modules/common/auth/pages/Singup";
import Landing from "./modules/user/landing/pages/Landing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/shop" element={<Products />} />
      <Route path="/auth" element={<Auth />}>
        <Route path="" element={<Navigate replace={true} to="login" />} />
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        <Route path="singup" element={<Singup />} />
      </Route>
      <Route path="admin" element={<AdminApp />}>
        <Route path="" element={<Navigate replace={true} to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="categories" element={<Categories />}>
          <Route path="" element={<CategoriesList />}>
            <Route path="new" element={<NewCategory />} />
          </Route>
        </Route>
        <Route path="products" element={<Products />}>
          <Route path="" element={<ProductsList />} />
          <Route path=":id" element={<ProductsForm />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
