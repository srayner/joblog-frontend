import React from "react";
import AppBar from "./app-bar";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { Route, Switch, Redirect } from "react-router-dom";
import ListJobs from "../jobs/list-jobs";
import AddJob from "../jobs/add-job";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    background: { default: "#eee" },
  },
  drawerPaper: { background: "blue" },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <AppBar />
        <Container maxwidth="lg">
          <Switch>
            <Route exact path="/">
              <ListJobs />
            </Route>
            <Route path="/add-job">
              <AddJob />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
}
