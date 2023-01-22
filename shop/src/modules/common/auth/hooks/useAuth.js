import { useContext } from "react";
import { AuthContext } from "../pages/providers/AuthProvider";

export default function useAuth() {
  const value = useContext(AuthContext);

  if (value === null) {
    throw new Error("фывф");
  }
  return value;
}
