import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

export default function DataGridHeader(props) {
  const { title } = props;

  return (
    <Grid
      container
      justifyContent="space-between"
      sx={{
        mb: 1,
      }}
    >
      <Grid item>
        <Typography variant="h6">{title}</Typography>
      </Grid>
      <Grid item>
        <Link component={RouterLink} to="/add-job">
          <Button variant="contained">New Job</Button>
        </Link>
      </Grid>
    </Grid>
  );
}
