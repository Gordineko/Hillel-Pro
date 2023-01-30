import React from "react";
import { Navigate } from "react-router-dom";
import useIsAuthorized from "../hooks/useIsAuthorized";

function ProtectedRout({ roles, children }) {
  const isAuthorized = useIsAuthorized(roles);

  return isAuthorized ? children : <Navigate replace={true} to="/auth" />;
}

export default ProtectedRout;
