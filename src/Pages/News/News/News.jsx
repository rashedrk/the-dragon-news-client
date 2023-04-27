import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsight from '../EditorsInsight/EditorsInsight';

const News = () => {
    const { _id, title, details, image_url, category_id } = useLoaderData();
    return (
        <div>
            <h4>Dragon News</h4>
            <Card>
                <Card.Body>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Title className='mt-4 mb-3'>
                        {title}
                    </Card.Title>
                    <Card.Text className='mb-3'>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="danger"><FaArrowLeft /> All news in this category</Button>
                    </Link>
                </Card.Body>
            </Card>
            <EditorsInsight/>
        </div>
    );
};

export default News;