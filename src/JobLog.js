import React from 'react'
import Job from './Job'

export default function JobLog({jobs}) {
    return (
        jobs.map(job => {
            return <Job key={job.id} job={job} />
        })
    )
}