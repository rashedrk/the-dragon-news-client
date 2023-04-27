import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NewsCard.css'
import moment from 'moment';
import { BsBookmark, BsShare } from 'react-icons/bs';
import { FaRegEye, FaRegStar, FaStar } from "react-icons/fa";
import Rating from 'react-rating';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, total_view, rating } = news;
    return (
        <Card className="mb-3">
            <Card.Header className='d-flex align-items-center' >
                <Image style={{ height: 40 }} src={author?.img} roundedCircle />
                <div className='ms-2 flex-grow-1'>
                    <h6 className='mb-0'>{author?.name}</h6>
                    <p className='text-secondary'>
                        <small>
                            {
                                moment(author?.published_date).format("YYYY-MM-D")
                            }
                        </small>
                    </p>
                </div>
                <BsBookmark className='me-2'></BsBookmark>
                <BsShare />
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img className='my-3' variant="top" src={image_url} />
                <Card.Text>
                    {details < 250 ? <>{details}</> : <>
                        {details.slice(0, 250)}...
                        <Link className='text-orange text-decoration-none d-block' to={`/news/${_id}`}>Read More</Link>
                    </>}
                </Card.Text>

            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1'>
                    <Rating
                    className='me-2 text-orange'
                        placeholderRating={rating?.number}
                        readonly
                        emptySymbol={<FaRegStar/>}
                        placeholderSymbol={<FaStar/>}
                        fullSymbol={<FaStar/>}
                    />
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaRegEye /> {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;