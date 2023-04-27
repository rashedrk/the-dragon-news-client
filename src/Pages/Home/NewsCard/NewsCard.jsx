import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NewsCard.css'

const NewsCard = ({ news }) => {
    const {_id, title, details,  image_url} = news;
    return (
        <Card className="mb-3">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img className='my-3' variant="top" src={image_url} />
                <Card.Text>
                    {details < 250 ? <>{details}</> : <>
                    {details.slice(0,250)}...
                    <Link className='text-orange text-decoration-none d-block' to={`/news/${_id}`}>Read More</Link>
                    </>}
                </Card.Text>
                
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default NewsCard;