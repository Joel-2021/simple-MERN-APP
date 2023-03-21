import React, { useEffect, useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
} from "@mui/material";
import { getUsers, deleteUser } from "../service/api";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0px auto;
`;
const Thead = styled(TableRow)`
  background-color: black;
  & > th {
    color: white;
    font-size: 20px;
  }
`;
const TBody = styled(TableRow)`
  & > td {
    font-size: 20px;
  }
`;
const AllUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAll();
  }, []);
  async function getAll() {
    let response = await getUsers();
    setUsers(response.data);
  }

  async function handleDelete(id){
    await deleteUser(id);
    getAll()
  }
  console.log(users);
  return (
    <StyledTable>
      <TableHead>
        <Thead>
          <TableCell>Name</TableCell>
          <TableCell>User Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone Number</TableCell>
          <TableCell></TableCell>
        </Thead>
      </TableHead>
      <TableBody>
        {users?.map((data) => (
          <TBody key={data._id}>
            <TableCell>{data?.name}</TableCell>
            <TableCell>{data?.user_name}</TableCell>
            <TableCell>{data?.email}</TableCell>
            <TableCell>{data?.phone_number}</TableCell>
            <TableCell>
              <Button
                color="secondary"
                variant="contained"
                component={Link}
                to={`/edit/${data?._id}`}
              >
                Edit
              </Button>{" "}
              <Button
                variant="contained"
                color="error"
                onClick={() => 
                  handleDelete(data?._id)
                }
              >
                Delete
              </Button>
            </TableCell>
          </TBody>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default AllUser;
