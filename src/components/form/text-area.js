import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

export default function TextArea(props) {
  const { name, chars, formik } = props;
  return (
    <Grid item xs={12} mb={1}>
      <TextField
        {...props}
        id={name + "-input"}
        fullWidth
        multiline
        rows={4}
        inputProps={{ maxLength: chars }}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        error={formik.touched[name] && Boolean(formik.errors[name])}
        helperText={formik.touched[name] ? formik.errors[name] : ""}
      ></TextField>
    </Grid>
  );
}
