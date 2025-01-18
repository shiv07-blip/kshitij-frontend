import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import AlertDialog from "./AlertDialog";
import { useState } from "react";

const headings = [
  "Name",
  "Size & Specification",
  "Quantity & Unit",
  "Technical Data Sheet(TDS)",
  "Quality Assurance Plan(QAP)",
  "Vendors",
  "Action",
];

export default function RFQTable() {
  const [rfq, setRFQ] = useState([]);
  const [open, setOpen] = useState(false);
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {headings.map((heading, index) => (
                <TableCell
                  key={index}
                  style={{
                    backgroundColor: "#FFDAB3",
                    borderRight:
                      index != headings.length - 1 ? "1px solid black" : "",
                    fontWeight: "bold",
                  }}
                >
                  {heading}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column, index) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{
                            borderRight:
                              index != columns.length - 1
                                ? "1px solid black"
                                : "",
                          }}
                        >
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })} */}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        onClick={() => {
          setOpen(true);
        }}
        style={{
          width: "20px",
          backgroundColor: "#FFDAB3",
          color: "black",
          margin: "5px",
        }}
      >
        Add{" "}
      </Button>
      <AlertDialog RFQ={rfq} setRFQ={setRFQ} open={open} setOpen={setOpen} />
    </Paper>
  );
}
