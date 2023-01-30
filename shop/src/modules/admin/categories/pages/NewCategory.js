import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Formik, Form } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import MyTextField from "../../../common/auth/pages/MyTextField";
import useCategoriesProvider from "../../../common/categories/hooks/useCategoriesProvider";

const initialValues = {
  title: "",
};

function NewCategory() {
  const navigate = useNavigate();
  const { createCategories } = useCategoriesProvider();

  function handleClose() {
    navigate("..");
  }
  function handleSubmit(values) {
    createCategories(values).then(handleClose);
  }

  return (
    <Dialog open={true} onClose={handleClose}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <DialogTitle>NewCategory</DialogTitle>
          <DialogContent>
            <MyTextField
              autoFocus
              margin="dense"
              name="title"
              label="Category Name"
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Subscribe</Button>
          </DialogActions>
        </Form>
      </Formik>
    </Dialog>
  );
}

export default NewCategory;
