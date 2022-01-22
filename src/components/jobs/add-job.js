import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import { postJob } from "../../data/api";
import { getProperties } from "../../data/api";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";

export default function AddJob() {
  const initialValues = {
    summary: "",
    description: "",
    property: "",
  };

  const onSubmit = (values) => {
    const job = {
      summary: values.summary,
      description: values.description,
      property: values.property,
      status: "open",
      user: 1,
    };
    postJob(job)
      .then((res) => {
        const newJob = res.data;
        setJobs((prevJobs) => {
          return [...prevJobs, newJob];
        });
        history.push("/");
      })
      .catch((err) => {
        alert("There was a problem submitting your data.");
      });
  };

  const validate = (values) => {
    let errors = {};
    if (!values.summary) {
      errors.summary = "A brief summary is required";
    }
    if (!values.description) {
      errors.description =
        "Please provide a full description of the work required";
    }
    if (!values.property) {
      errors.property = "Please select a property";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  const [, setJobs] = useState([]);
  const [properties, setProperties] = useState([]);
  let history = useHistory();

  useEffect(() => {
    getProperties().then((res) => {
      if (res.data) setProperties([...res.data]);
    });
  }, []);

  return (
    <Box sx={{ mt: 6 }}>
      <form onSubmit={formik.handleSubmit}>
        <Card>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item>
                <Typography variant="h6">Add new job</Typography>
              </Grid>
              <Grid item xs={12} mb={1}>
                <TextField
                  id="summary-input"
                  name="summary"
                  label="Summary"
                  fullWidth
                  multiline
                  rows={4}
                  inputProps={{ maxLength: 150 }}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.summary}
                  error={formik.errors.summary && formik.touched.summary}
                  helperText={formik.errors.summary}
                ></TextField>
              </Grid>
              <Grid item xs={12} mb={1}>
                <TextField
                  id="description-input"
                  name="description"
                  label="Description"
                  fullWidth
                  multiline
                  rows={4}
                  inputProps={{ maxLength: 500 }}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.description}
                  error={
                    formik.errors.description && formik.touched.description
                  }
                  helperText={formik.errors.description}
                ></TextField>
              </Grid>
              <Grid item xs={12} mb={1}>
                <FormControl
                  fullWidth
                  error={formik.errors.property && formik.touched.property}
                >
                  <InputLabel id="property-select-label">Property</InputLabel>
                  <Select
                    id="property-select"
                    name="property"
                    labelId="property-select-label"
                    label="Property"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.property}
                    error={formik.errors.property && formik.touched.property}
                  >
                    {properties.map((item) => {
                      return (
                        <MenuItem value={item.id} key={item.id}>
                          {item.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                  {formik.errors.property && formik.touched.property && (
                    <FormHelperText>{formik.errors.property}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid
                item
                xs={12}
                mb={1}
                container
                justifyContent={"space-between"}
              >
                <Button type="submit" variant="contained">
                  Add
                </Button>
                <Link component={RouterLink} to="/">
                  <Button>Cancel</Button>
                </Link>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </form>
    </Box>
  );
}
