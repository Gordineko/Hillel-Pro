import React, { useContext } from "react";
import { Form, Formik } from "formik";
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

const initialValues = { email: "", password: "" };

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required()
    .email("not email")
    .min(3, " min 3 characters length"),
  password: yup.string().required().min(6, " min 6 characters length"),
});
function Login() {
  const auth = useContext(AuthContext);

  function onSubmit(values, meta) {
    console.log(values, meta);
    auth.login(values.email, values.password).catch((error) => {
      if (error.response.status >= 400 && error.response.status < 500) {
        meta.setErrors({
          password: error.response.data.error,
        });
      }
    });
  }

  return (
    <Box>
      <Container maxWidth="md">
        <CompassCalibrationIcon />
        <h1>Sign in</h1>
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
                  name="email"
                  type="text"
                  label="email"
                  variant="standard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={touched.email && errors.email && "not email"}
                  helperText={touched.email && errors.email && "not email"}
                  autoComplete="email"
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
                <br />
                <br />
                <Box className="pass">
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Saved"
                  />
                  <Link component="button" variant="body2" type="link" href="#">
                    forgot your password?
                  </Link>
                </Box>
                <br />
                <br />
                <Button
                  variant="contained"
                  type="submit"
                  startIcon={<SendIcon />}
                >
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
