import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import './RightNav.css'

const RightNav = () => {
    
    return (
        <div>
            {/*----------------
                social login 
            ------------------*/}
            <h4>Login With</h4>
            <Button className=' me-2 ' variant="outline-primary"><FaGoogle /> Login With Google</Button>
            <Button variant="outline-secondary"><FaGithub /> Login With Github</Button>

            {/* -------------------
                social links  
                Find Us On section
            -------------------------*/}
            <div className='mt-3'>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            {/*---------- 
                QZone
                Photo Album 
            --------------*/}
            <QZone></QZone>

            {/*-----------
                Banner 
            ------------*/}

            <div className='banner d-flex text-center p-5 align-items-center'>
                <div>
                    <h2>Create an Amazing Newspaper</h2>
                    <p className='my-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant="danger">Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;