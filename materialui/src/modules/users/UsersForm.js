import { TextField, Paper, Button } from "@mui/material";
import React, { createRef, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import useUser from "./hooks/useUser";
const EMAIL_REGEXP =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const EMPTY_FORM = {
  name: "",
  surname: "",
  email: "",
};
function UsersForm() {
  const { id } = useParams();
  const { user, changeUser, saveUser } = useUser(id);
  const [errors, setErrors] = useState(EMPTY_FORM);
  const [fields, setFields] = useState(EMPTY_FORM);
  const formRef = createRef();
  const navigate = useNavigate();

  function validation() {
    const errorsObj = {};
    if (fields["name"].length < 3) {
      errorsObj.name = "Error name";
    }
    if (fields["surname"].length < 3) {
      errorsObj.surname = "Error surname";
    }
    if (!fields["email"].toLowerCase().match(EMAIL_REGEXP)) {
      errorsObj.email = "Error email";
    }

    setErrors(errorsObj);
    return !Object.keys(errorsObj).length;
  }

  function onInputChange(e) {
    setFields({ ...fields, [e.target.name]: e.target.value });
    changeUser({
      [e.target.name]: e.target.value,
    });
  }

  function onFormSubmit(e) {
    e.preventDefault();

    if (validation()) {
      saveUser(user).then(() => navigate(".."));
    }
  }

  return (
    <Paper sx={{ marginTop: "20px" }}>
      <form onSubmit={onFormSubmit} ref={formRef}>
        <TextField
          error={!!errors?.name}
          helperText={errors?.name}
          label="Name"
          variant="outlined"
          fullWidth
          name="name"
          value={user.name}
          onChange={onInputChange}
        />
        <TextField
          error={!!errors?.surname}
          helperText={errors?.surname}
          label="Surname"
          variant="outlined"
          fullWidth
          name="surname"
          value={user.surname}
          onChange={onInputChange}
        />
        <TextField
          error={!!errors?.email}
          helperText={errors?.email}
          label="Email"
          variant="outlined"
          fullWidth
          name="email"
          value={user.email}
          onChange={onInputChange}
        />
        <Button type="submit" color="primary" variant="contained">
          Save
        </Button>
        <Button to={".."} component={NavLink}>
          Cancel
        </Button>
      </form>
    </Paper>
  );
}

export default UsersForm;
