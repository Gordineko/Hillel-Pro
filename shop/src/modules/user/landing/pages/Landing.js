import React from "react";
import { NavLink } from "react-router-dom";
import useUser from "../../../common/auth/hooks/useUser";

function Landing() {
  const user = useUser();
  console.log(user);
  return (
    <div>
      {JSON.stringify(user)}

      <NavLink to="/auth">Login</NavLink>
      <NavLink to="/admin">Admin Panel</NavLink>
      <NavLink to="/auth/logout">Logout</NavLink>
    </div>
  );
}

export default Landing;
