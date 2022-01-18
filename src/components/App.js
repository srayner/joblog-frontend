import React from 'react'
import AppBar from './AppBar'
import Container from '@mui/material/Container'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import JobListContainer from './JobListContainer'
import AddJob from './AddJob'
import CssBaseline from '@mui/material/CssBaseline';

export default function App() {
  return (
    <Router>
      <CssBaseline>
        <AppBar />
        <Container maxwidth="lg">
          <Switch>
            <Route exact path="/">
              <JobListContainer />
            </Route>
            <Route path="/add-job">
              <AddJob />
            </Route>
          </Switch>
        </Container>
      </CssBaseline>
    </Router>
  )
}
