import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchJobs } from '../features/jobSlice'
import JobDetails from '../components/JobDetails';
import Spinner from '../components/Spinner';


function JobDetailed() {
  const job = useSelector(state => state.job)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchJobs())
  }, [])

  const id = window.location.pathname.slice(1);

  const selectedJob = job.jobs.find((job) => job.id === id);

  return (
    <>
      {job.loading && <Spinner />}
      {!job.loading && job.error ? <div>Error: {job.error}</div> : null}
      {!job.loading && selectedJob ? (
        <JobDetails job={selectedJob} />
      ) : null}
    </>
  )
}

export default JobDetailed