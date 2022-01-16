import React, {useState, useRef, useEffect} from 'react'
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import DataGrid from './Datagrid'
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'jobLog.jobs'

function App() {

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedJobs) setJobs(storedJobs)
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

        <DataGrid rows={jobs}/>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField {...register("summary", { required: true })} variant="outlined" />
          <TextField {...register("description", { required: true })} variant="outlined" />
          <Button type="submit" variant="contained">Add Job</Button>
        </form>

        <div>
          {jobs.length} jobs
        </div>
    </>
  )
}

export default App
