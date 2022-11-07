import { Link } from 'react-router-dom'
import moment from 'moment'
import bookmark from '../images/bookmark.svg'
import location from '../images/location.svg'
import star from '../images/star.svg'

function JobBoardComponent({ job }) {
    const now = moment([
        moment().format().slice(0, 4),
        moment().format().slice(5, 7),
        moment().format().slice(8, 10)
    ]);

    const diffBetweenDates = now.from([
        job.createdAt.slice(0, 4),
        job.createdAt.slice(5, 7),
        job.createdAt.slice(8, 10)
    ], true);

    return (
        <div className="job-bar">
            <div className="job-bar__content">
                <img src={job.pictures[0]} alt={job.title} />
                <div className="job-bar__content__info">
                    <Link key={job.id} to={`/${job.id}`}>
                        <div className="job-bar__content__info__text_bold">{job.title}</div>
                    </Link>
                    <div className="job-bar__content__info__text">{job.salary}</div>
                    <div className="job-bar__content__info__location">
                        <img src={location} alt="location" />
                        <div className="job-bar__content__info__text">{job.address}</div>
                    </div>
                </div>
            </div>
            <div className="job-bar__rating">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
            </div>
            <div className="job-bar__frame">
                <img src={bookmark} alt="bookmark" />
                <div className="job-bar__frame__text">
                    Posted {diffBetweenDates} ago
                </div>
            </div>
        </div>
    )
}

export default JobBoardComponent