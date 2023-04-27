import React, { useContext } from 'react';
import logo from "../../../assets/logo.png";
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";



const Header = () => {
    return (
        <Container>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, ")}<span className='text-secondary'>{moment().format("MMMM D, YYYY")}</span></p>
            </div>
            <div className='d-flex bg-light p-3 mb-1'>
                <Button className='me-1' variant="danger">Latest</Button>
                <Marquee speed={100}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            
        </Container>
    );
};

export default Header;