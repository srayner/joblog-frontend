import React, { useState, useEffect } from "react";
import DataGrid from "./Datagrid";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { getJobs, getProperties } from "../data/api";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

export default function JobListContainer() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs().then((res) => {
      if (res.data) setJobs([...res.data]);
    });
  }, []);

  return (
    <Paper
      elevation={0}
      sx={{
        mt: 3,
        padding: 3,
      }}
    >
      <Grid
        container
        justifyContent="space-between"
        sx={{
          mb: 1,
        }}
      >
        <Grid item>
          <Typography variant="h6">List of existing jobs</Typography>
        </Grid>
        <Grid item>
          <Link component={RouterLink} to="/add-job">
            <Button variant="contained">New Job</Button>
          </Link>
        </Grid>
      </Grid>
      <DataGrid rows={jobs} />
    </Paper>
  );
}
