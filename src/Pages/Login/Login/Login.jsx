import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container className='w-25 mx-auto'>
            <h4>Login here</h4>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required type="email" name="email" placeholder="Enter email" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type="password" name="password" placeholder="Password" />
                </Form.Group>
                
                <Form.Text className="text-danger">
                        
                </Form.Text>
                <Form.Text className="text-success">
                        
                </Form.Text>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className="text-secondary d-block">
                Don't Have An Account ? <Link className='text-orange text-decoration-none' to="/register">Register</Link>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;