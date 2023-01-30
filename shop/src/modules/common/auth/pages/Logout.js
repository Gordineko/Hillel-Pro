import { Box, Button, Container } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import CompassCalibrationIcon from "@mui/icons-material/CompassCalibration";
import ProtectedRout from "../components/ProtectedRout";
import useAuth from "../hooks/useAuth";

function Logout() {
  const { logout } = useAuth();

  return (
    <ProtectedRout>
      <Box>
        <Container maxWidth="md">
          <CompassCalibrationIcon />
          <h1>Sign out</h1>

          <Button
            variant="contained"
            type="submit"
            startIcon={<SendIcon />}
            onClick={logout}
          >
            Sing aut
          </Button>
        </Container>
      </Box>
    </ProtectedRout>
  );
}

export default Logout;
