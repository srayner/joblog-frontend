import React, { useState, useEffect } from "react";
import DataGrid from "../data-grid/data-grid";
import DataGridHeader from "../data-grid/data-grid-header";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { getJobs } from "../../data/api";

export default function ListJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs().then((res) => {
      if (res.data) setJobs([...res.data]);
    });
  }, []);

  return (
    <Box sx={{ mt: 6 }}>
      <Paper
        sx={{
          mt: 3,
          padding: 3,
          paddingBottom: 0,
        }}
      >
        <DataGridHeader title={"List of jobs"} />
        <DataGrid rows={jobs} />
      </Paper>
    </Box>
  );
}
