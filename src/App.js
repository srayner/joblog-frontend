import React, {useState, useEffect} from 'react'
import Button from '@mui/material/Button'
import { useForm } from "react-hook-form"
import TextField from '@mui/material/TextField'
import DataGrid from './Datagrid'
import { v4 as uuidv4 } from 'uuid'
import SimpleContainer from './components/SimpleContainer'
import Paper from '@mui/material/Paper'
import AppBar from './components/AppBar'
import {getJobs} from './data/api'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const LOCAL_STORAGE_KEY = 'jobLog.jobs'

function App() {

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const [jobs, setJobs] = useState([])

  useEffect(() => {
    getJobs().then(res => {
      if (res.data) setJobs([...res.data])
    })
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(jobs))
  }, [jobs])

  const onSubmit = data => {
    const summary = data.summary
    console.log('hello')
    if (summary === "") return
    reset()
    setJobs(prevJobs => {
      return [...prevJobs, {id: uuidv4(), summary: summary, description: '', status: 'open'}]
    })
  }

  return (
    <>
      <AppBar />
      <Container maxwidth="lg">
        <Paper
          elevation={0}
          sx={{
            mt: 3,
            padding: 3
          }}>

          <Grid
            container
            justifyContent="space-between"
            sx={{
              mb: 1
            }}
          >
            <Grid item>
              <Typography variant="h6">List of existing jobs</Typography>
            </Grid>
            <Grid item>
              <Button variant="contained">Add Job</Button>
            </Grid>
          </Grid>
          
          <DataGrid rows={jobs}/>

        </Paper>

      </Container>
        
    </>
  )
}

export default App
