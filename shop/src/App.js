import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminApp from "./modules/admin/AdminApp";
import Dashboard from "./modules/admin/dashboard/pages/Dashboard";
import Auth from "./modules/common/auth/pages/Auth";
import Login from "./modules/common/auth/pages/Login";
import Logout from "./modules/common/auth/pages/Logout";
import AuthProvider from "./modules/common/auth/pages/providers/AuthProvider";
import Singup from "./modules/common/auth/pages/Singup";
import Landing from "./modules/user/landing/pages/Landing";
import Products from "./modules/user/products/pages/Products";
function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/shop" element={<Products />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="" element={<Navigate to="login" />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="singup" element={<Singup />} />
        </Route>
        <Route path="admin" element={<AdminApp />}>
          <Route path="" element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
