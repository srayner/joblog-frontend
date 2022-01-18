import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { postJob } from "../data/api";

export default function AddJob() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [jobs, setJobs] = useState([]);

  const onSubmit = (data) => {
    const job = { ...data, status: "open", user: "Steve" };
    reset();
    postJob(job).then((res) => {
      const newJob = res.data;
      setJobs((prevJobs) => {
        return [...prevJobs, newJob];
      });
    });
  };

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
          <Typography variant="h6">Add new job</Typography>
        </Grid>
      </Grid>

      <Card>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={12} mb={1}>
              <TextField
                label="Summary"
                fullWidth
                multiline
                rows={4}
                {...register("summary")}
              ></TextField>
            </Grid>
            <Grid item item xs={12} mb={1}>
              <TextField
                label="Description"
                fullWidth
                multiline
                rows={4}
                {...register("description")}
              ></TextField>
            </Grid>
            <Grid item item xs={12} mb={1}>
              <FormControl fullWidth>
                <InputLabel id="property-select-label">Property</InputLabel>
                <Select
                  labelId="property-select-label"
                  id="property-select"
                  label="Property"
                  {...register("property")}
                >
                  <MenuItem value={10}>52 Park Place, Cartington</MenuItem>
                  <MenuItem value={20}>27 Brynglas Road, Glespin</MenuItem>
                  <MenuItem value={30}>23 Boat Lane, Reydon</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              mb={1}
              container
              justifyContent={"space-between"}
            >
              <Button variant="contained" onClick={handleSubmit(onSubmit)}>
                Add
              </Button>
              <Link component={RouterLink} to="/">
                <Button>Cancel</Button>
              </Link>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Paper>
  );
}
