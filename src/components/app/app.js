import React from "react";
import AppBar from "./app-bar";
import Container from "@mui/material/Container";
import { Route, Switch, Redirect } from "react-router-dom";
import ListJobs from "../jobs/list-jobs";
import AddJob from "../jobs/add-job";
import CssBaseline from "@mui/material/CssBaseline";

export default function App() {
  return (
    <>
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
    </>
  );
}
