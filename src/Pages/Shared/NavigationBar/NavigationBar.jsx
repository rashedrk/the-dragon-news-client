import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider/AuthProvider';

const NavigationBar = () => {
    const { user } = useContext(AuthContext);
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="none" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {user && <Nav.Link>
                                <FaUserCircle style={{ fontSize: '2rem' }} />
                                <span className='ms-2'>{user.name}</span>
                            </Nav.Link>}
                            <Nav.Link>
                                {user ?
                                    <Button variant="dark">Logout</Button>
                                    :
                                    <Link to='/login'><Button variant="dark">Login</Button></Link>
                                    }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;