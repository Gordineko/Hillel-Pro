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
  name: yup.string().required().min(3, " min 3 characters length"),
  password: yup.string().required().min(8, " min 8 characters length"),
});
function Login() {
  const auth = useContext(AuthContext);

  function onSubmit(values) {
    auth.login(values.name, values.password, values.role);
  }

  return (
    <Container maxWidth="sm">
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
              />
              <p>{touched.name && errors.name && <p>{errors.name}</p>}</p>
              <br />
              <TextField
                name="password"
                type="password"
                label="Password"
                variant="standard"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={touched.password && errors.password && "name"}
                helperText={
                  touched.password && errors.password && "Incorrect entry."
                }
              />
              <p>
                {touched.password && errors.password && (
                  <p>{errors.password}</p>
                )}
              </p>
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

// import React, { useContext } from "react";
// import { Field, Form, Formik } from "formik";
// import { AuthContext } from "./providers/AuthProvider";
// import { Navigate } from "react-router-dom";
// import * as yup from "yup";
// import { TextField } from "@mui/material";
// import { Container } from "@mui/system";
// import "./Login.css";

// const initialValues = { name: "", password: "", role: "admin" };

// const loginValidationSchema = yup.object().shape({
//   username: yup.string().required().min(3, " min 3 characters length"),
//   password: yup.string().required().min(8, " min 8 characters length"),
// });
// function Login() {
//   const auth = useContext(AuthContext);

//   function onSubmit(values) {
//     auth.login(values.username, values.password, values.role);
//   }

//   return (
//     <Container maxWidth="sm">
//       <Formik
//         initialValues={initialValues}
//         onSubmit={onSubmit}
//         validationSchema={loginValidationSchema}
//       >
//         {(props) =>
//           console.log(props) || (
//             <Form>
//               {auth.isAuthorized && <Navigate to="/" />}

//               <Field
//                 name="username"
//                 component={TextField}
//                 label="Name"
//                 variant="standard"
//               />
//               <br />
//               <Field
//                 name="password"
//                 component={TextField}
//                 label="Password"
//                 variant="standard"
//               />
//               <br />
//               <Field
//                 name="role"
//                 component={TextField}
//                 label="Role"
//                 variant="standard"
//               />
//               <br />
//               <button type="submit">Login</button>
//             </Form>
//           )
//         }
//       </Formik>
//     </Container>
//   );
// }

// export default Login;
