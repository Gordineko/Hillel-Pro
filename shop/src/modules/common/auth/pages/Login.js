import React, { useContext } from "react";
import { Field, Form, Formik } from "formik";
import { AuthContext } from "./providers/AuthProvider";
import { Navigate } from "react-router-dom";
import * as yup from "yup";
import { Container } from "@mui/system";
import "./Login.css";
import SendIcon from "@mui/icons-material/Send";
import CompassCalibrationIcon from "@mui/icons-material/CompassCalibration";
import {
  Checkbox,
  FormControlLabel,
  Link,
  Box,
  Button,
  TextField,
} from "@mui/material";

const initialValues = { name: "", password: "", role: "admin" };

const loginValidationSchema = yup.object().shape({
  name: yup.string().required().min(3, " min 3 characters length"),
  password: yup.string().required().min(8, " min 8 characters length"),
});
function Login() {
  const auth = useContext(AuthContext);

  function onSubmit(values) {
    auth.login(values.name, values.password, values.role);
  }

  return (
    <Box>
      <Container maxWidth="md">
        <CompassCalibrationIcon />
        <h1>Sing in</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={loginValidationSchema}
          validateOnBlur
        >
          {({
            props,
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isValid,
            handleSubmit,
            dirty,
          }) =>
            console.log(props, values) || (
              <Form>
                {auth.isAuthorized && <Navigate to="/" />}

                <TextField
                  name="name"
                  type="text"
                  label="Name"
                  variant="standard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  error={touched.name && errors.name && "name"}
                  helperText={touched.name && errors.name && "Incorrect entry."}
                />

                <br />
                <TextField
                  name="password"
                  type="password"
                  label="Password"
                  variant="standard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  error={touched.password && errors.password && "password"}
                  helperText={
                    touched.password && errors.password && "Incorrect entry."
                  }
                />

                <br />
                <Field
                  name="role"
                  component={TextField}
                  label="Role"
                  variant="standard"
                />
                <br />
                <br />
                <br />
                <Box className="pass">
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Saved"
                  />
                  <Link component="button" variant="body2">
                    forgot your password?
                  </Link>
                </Box>
                <br />
                <br />

                <Button variant="contained" startIcon={<SendIcon />}>
                  Login
                </Button>
              </Form>
            )
          }
        </Formik>
      </Container>
    </Box>
  );
}

export default Login;
