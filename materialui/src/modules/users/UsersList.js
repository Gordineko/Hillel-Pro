import {
  Button,
  ListItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectList } from "../../store/selector/list";
import UsersListItem from "./UsersListItem";
import store from "../../store";
import { getUsers } from "../../store/action/list";
function UsersList() {
  const dispatch = useDispatch();
  useEffect(() => {
    store.dispatch(getUsers());
  }, [dispatch]);
  const list = useSelector(selectList);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Surname</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((item) => (
            <UsersListItem key={item.id} person={item} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UsersList;
