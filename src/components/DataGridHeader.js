import React from "react";
import Button from "@mui/material/Button";

export default function DataGridHeader() {
  return (
    <div>
      <span>List of existing jobs</span>
      <Button variant="contained">Add Job</Button>
    </div>
  );
}
