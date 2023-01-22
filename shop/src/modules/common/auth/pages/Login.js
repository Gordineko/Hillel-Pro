import React, { useContext } from "react";
import { Field, Form, Formik } from "formik";
import { AuthContext } from "./providers/AuthProvider";
import { Navigate } from "react-router-dom";
import * as yup from "yup";
import { TextField } from "@mui/material";
import { Container } from "@mui/system";
import "./Login.css";

const initialValues = { name: "", password: "", role: "admin" };

const loginValidationSchema = yup.object().shape({
  username: yup.string().required().min(3),
  password: yup.string().required().min(8),
});
function Login() {
  const auth = useContext(AuthContext);

  function onSubmit(values) {
    auth.login(values.username, values.password, values.role);
  }

  return (
    <Container maxWidth="sm">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={loginValidationSchema}
      >
        {(props) =>
          console.log(props) || (
            <Form>
              {auth.isAuthorized && <Navigate to="/" />}
              {/* <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
            /> */}

              <Field
                name="username"
                component={TextField}
                label="Name"
                variant="standard"
              />
              <br />
              <Field
                name="password"
                component={TextField}
                label="Password"
                variant="standard"
              />
              <br />
              <Field
                name="role"
                component={TextField}
                label="Role"
                variant="standard"
              />
              <br />
              <button type="submit">Login</button>
            </Form>
          )
        }
      </Formik>
    </Container>
  );
}

export default Login;
