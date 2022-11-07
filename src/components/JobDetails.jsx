import { Link } from 'react-router-dom'
import leftArrow from '../images/left-arrow.svg'
import location from '../images/location.svg'
import bookmark from '../images/bookmark.svg'
import share from '../images/share.svg'
import separator from '../images/separator.svg'
import combinedShape from '../images/combined-shape.svg'
import moment from 'moment'
import React from 'react'
import GoogleMapContainer from '../components/Map'

function JobDetails({ job }) {
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
        <div className="job-details">
            <div className="job-details__content">
                <div className="job-details__content__header">
                    <div className="job-details__content__header__title">
                        Job Details
                    </div>
                    <div className="job-details__content__header__actions">
                        <div className="job-details__content__header__bookmark">
                            <img src={bookmark} alt="bookmark" />
                            <span className="job-details__text_body">
                                Save to my list
                            </span>
                        </div>
                        <div className="job-details__content__header__share">
                            <img src={share} alt="share" />
                            <span className="job-details__text_body">
                                Share
                            </span>
                        </div>
                    </div>
                </div>
                <div className="separator">
                    <img src={separator} alt="separator" />
                </div>
                <button className="job-details__content__button_apply">
                    Apply now
                </button>
                <div className="job-details__content__description">
                    <div className="job-details__content__description__header">
                        <div className="job-details__content__description__job-name">
                            {job.title}
                        </div>
                        <div className="job-details__content__description__salary">
                            <div>
                                € {job.salary.replaceAll('k', '000')}
                            </div>
                            <span className="job-details__text_body">
                                Brutto, per year
                            </span>
                        </div>
                    </div>
                    <div className="job-details__content__description__date">
                        Posted {diffBetweenDates} ago
                    </div>
                    <div className="job-details__content__description__text job-details__text_body">
                        {job.description
                            .split('\n')
                            .map((job, g) => (job.length < 30)
                                ? <p key={g}>{job}</p>
                                : <div key={g}>{job.split('.').map((job, i) => <div key={i}>{job}</div>)}</div>
                            )
                        }
                    </div>
                </div>
                <button className="job-details__content__button_apply">
                    Apply now
                </button>
                <div className="job-details__content__additional-info">
                    <div className="job-details__content__additional-info__title">
                        Additional info
                    </div>
                    <div className="separator">
                        <img src={separator} alt="separator" />
                    </div>
                    <div className="job-details__content__additional-info__employment">
                        <div className="job-details__text_body">
                            Employment type
                        </div>
                        <div className="job-details__content__additional-info__employment__types">
                            {job.employment_type.map(
                                (type, i) => <div className="job-details__content__additional-info__employment__type" key={i}>{type}</div>
                            )}
                        </div>
                    </div>
                    <div className="job-details__content__additional-info__benefits">
                        <div className="job-details__content__additional-info__benefits__title job-details__text_body">
                            Benefits
                        </div>
                        <div className="job-details__content__additional-info__benefits__types">
                            {job.benefits.map(
                                (benefit, i) => <div className="job-details__content__additional-info__benefits__benefit" key={i}>{benefit}</div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="job-details__content__attached-images">
                    <div className="job-details__content__attached-images__title">
                        Attached images
                    </div>
                    <div className="separator">
                        <img src={separator} alt="separator" />
                    </div>
                    {job.pictures.map(
                        (picture, i) =>
                            <div className="job-details__content__attached-images__image" key={i}>
                                <img src={picture} alt="picture" />
                            </div>
                    )}
                </div>
                <button className='job-details__content__button_return'>
                    <Link to='/'>
                        <img src={leftArrow} alt="left-arrow" />
                        <span className='button__return__text'>
                            Return to job board
                        </span>
                    </Link>
                </button>
            </div>
            <div>
                Contacts
            </div>
            <div className="separator">
                <img src={separator} alt="separator" />
            </div>
            <div className="job-details__contacts">
                <div className="job-details__contacts__info">
                    <img src={combinedShape} alt="combined-shape" />
                    <div>
                        {job.name}
                    </div>
                    <div className="job-bar__content__info__location">
                        <img src={location} alt="location" />
                        <div className="job-bar__content__info__text">
                            {job.address}
                        </div>
                    </div>
                    <div>
                        {job.phone}
                    </div>
                    <div>
                        {job.email}
                    </div>
                </div>
                <div className="job-details__contacts__map">
                    <GoogleMapContainer location={job.location} />
                </div>
            </div>
        </div>
    )
}

export default JobDetails