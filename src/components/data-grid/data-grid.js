import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function DataGrid({ rows }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Summary</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Property Name</TableCell>
          <TableCell>Raised By</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>{row.summary}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>{row.property.name}</TableCell>
            <TableCell>
              {row.user.firstName} {row.user.lastName}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
