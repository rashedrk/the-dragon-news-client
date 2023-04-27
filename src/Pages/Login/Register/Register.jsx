import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container className='w-25 mx-auto'>
            <h4>Register here</h4>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control required type="text" name="name" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control required type="text" name="photo" placeholder="Enter your photo url" />
                </Form.Group>
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
                    Register
                </Button>
                <Form.Text className="text-secondary d-block">
                    Already Have An Account ? <Link className='text-orange text-decoration-none' to="/login">Login</Link>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;