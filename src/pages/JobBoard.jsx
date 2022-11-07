import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import ReactPaginate from 'react-paginate'
import { fetchJobs } from '../features/jobSlice'
import JobBoardComponent from '../components/JobBoardComponent';
import Spinner from '../components/Spinner';
import leftArrow from '../images/left-arrow.svg'
import rightArrow from '../images/right-arrow.svg'

function JobBoard() {
  const [pageNumber, setPageNumber] = useState(0);

  const jobsPerPage = 15;
  const pagesVisited = pageNumber * jobsPerPage;

  const job = useSelector(state => state.job)
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    dispatch(fetchJobs());
  }, [])

  const displayJobs = job.jobs
    .slice(pagesVisited, pagesVisited + jobsPerPage)
    .map((job) => <JobBoardComponent job={job} key={job.id} />);

  const pageCount = Math.ceil(job.jobs.length / jobsPerPage);

  const changePage = ({ selected }) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setPageNumber(selected);
  };


  return (
    <>
      {job.loading && <Spinner />}
      {!job.loading && job.error ? <div>Error: {job.error}</div> : null}
      {!job.loading && displayJobs ? (
        <main>
          <div className='job'>
            {displayJobs}
          </div>
          <ReactPaginate
            previousLabel={<img src={leftArrow} alt="left-arrow" />}
            nextLabel={<img src={rightArrow} alt="right-arrow" />}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"job-bar__btns"}
            previousLinkClassName={"job-bar__btn-previous"}
            nextLinkClassName={"job-bar__btn-next"}
            disabledClassName={"job-bar__disabled"}
            activeClassName={"job-bar__active"}
          />
        </main>
      ) : null}
    </>
  )
}

export default JobBoard