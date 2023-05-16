import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Link } from "react-router-dom";
import EditUserData from "./EditUserData";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Storage } from "@mui/icons-material";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const DashBoard = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gmail, setGmail] = useState("");
  const [editId, setEditId] = useState();
  const [mobileNo, setMobileNO] = useState("");
  const [city, setCity] = useState("");
  const [underAge, setUnderAge] = useState("");
  const [gender, setGender] = useState("");
  const [language, setLanguage] = useState("");
  const handleDelete = (id) => {
    let del = window.confirm("do you really want to delete this user");
    if (del) {
      axios
        .delete(`http://localhost:3000/deleteUser/${id}`)
        .then((res) => props.getAllData());
    }
  };

  useEffect(() => {
    props.getAllData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">age</StyledTableCell>
              <StyledTableCell align="center">E-mail</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.profileData.map((row, i) => (
              <StyledTableRow key={i}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.age}</StyledTableCell>
                <StyledTableCell align="center">{row.gmail}</StyledTableCell>
                <StyledTableCell align="center">
                  <button
                    onClick={() => handleDelete(row.uid)}
                    style={{ backgroundColor: "none", border: "none" }}
                  >
                    <Tooltip
                      title="Delete"
                      style={{ backgroundColor: "red", color: "black" }}
                    >
                      <IconButton>
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </button>

                  <button
                    style={{
                      marginLeft: "5px",
                      backgroundColor: "none",
                      border: "none",
                    }}
                    onClick={() => {
                      setName(row.name);
                      setAge(row.age);
                      setGmail(row.gmail);
                      setCity(row.city);
                      setMobileNO(row.mobileNo);
                      setGender(row.gender);
                      setLanguage(row.language);
                      setUnderAge(row.underAge);
                      setEditId(row.uid);
                    }}
                  >
                    <EditUserData
                      name={name}
                      age={age}
                      gmail={gmail}
                      mobileNo={mobileNo}
                      city={city}
                      underAge={underAge}
                      gender={gender}
                      language={language}
                      editId={editId}
                      getAllData={props.getAllData}
                    />
                  </button>
                  <Link
                    to={`/profile/userdata/${row._id}`}
                    onClick={() => {
                      props.setId(row._id);
                    }}
                  >
                    <button
                      style={{
                        marginLeft: "5px",
                        border: "none",
                      }}
                    >
                      <Tooltip title="View">
                        <IconButton>
                          <Storage
                            style={{
                              width: "25px",
                              height: "25px",
                              color: "green",
                            }}
                          />
                        </IconButton>
                      </Tooltip>
                    </button>
                  </Link>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
