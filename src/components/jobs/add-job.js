import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import { postJob, postProperty } from "../../data/api";
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
    const property = { name: values.property };
    postProperty(property).then((res) => {
      const job = {
        summary: values.summary,
        description: values.description,
        property: res.data.id,
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
                  error={
                    formik.touched.summary && Boolean(formik.errors.summary)
                  }
                  helperText={
                    formik.touched.summary ? formik.errors.summary : ""
                  }
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
                    formik.touched.description &&
                    Boolean(formik.errors.description)
                  }
                  helperText={
                    formik.touched.description ? formik.errors.description : ""
                  }
                ></TextField>
              </Grid>
              <Grid item xs={12} mb={1}>
                <TextField
                  id="property-input"
                  name="property"
                  label="Property"
                  fullWidth
                  inputProps={{ maxLength: 255 }}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.property}
                  error={
                    formik.touched.property && Boolean(formik.errors.property)
                  }
                  helperText={
                    formik.touched.property ? formik.errors.property : ""
                  }
                ></TextField>
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
