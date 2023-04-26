import React from 'react';
import logo from "../../../assets/logo.png";
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">profile</Nav.Link>
                            <Nav.Link href="#memes">
                                <Button variant="dark">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;