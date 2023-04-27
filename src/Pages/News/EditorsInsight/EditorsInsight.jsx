import React from 'react';
import editorsInsight1 from '../../../assets/editorsInsight1.png';
import editorsInsight2 from '../../../assets/editorsInsight2.png';
import editorsInsight3 from '../../../assets/1.png'
import { Card, Col, Row } from 'react-bootstrap';
import { FaRegCalendar } from 'react-icons/fa';

const EditorsInsight = () => {
    return (
        <div className='mt-5'>
            <h4 className='mb-3'>Editors Insight</h4>
            <Row xs={1} md={2} lg={3} className="g-4">
                    <Col>
                        <Card className='h-100'>
                            <Card.Img variant="top" src={editorsInsight1} />
                            <Card.Body>
                                <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                                <Card.Text className='text-secondary d-flex align-items-center'>
                                    <FaRegCalendar/> <span className='ms-2'>Jan 4, 2022</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='h-100'>
                            <Card.Img variant="top" src={editorsInsight2} />
                            <Card.Body>
                                <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                                <Card.Text className='text-secondary d-flex align-items-center'>
                                    <FaRegCalendar/> <span className='ms-2'>Jan 4, 2022</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='h-100'>
                            <Card.Img variant="top" src={editorsInsight3} />
                            <Card.Body>
                                <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                                <Card.Text className='text-secondary d-flex align-items-center'>
                                    <FaRegCalendar/> <span className='ms-2'>Jan 4, 2022</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
            </Row>
        </div>
    );
};

export default EditorsInsight;