import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    
    const from = location.state?.from?.pathname || '/';
    //handle form submit by login button click
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(() => {
            console.log('logged in');
            navigate(from, {replace : true});
        })
        .catch(err => console.log(err))
    }
    return (
        <Container className='w-25 mx-auto'>
            <h4>Login here</h4>
            <Form onSubmit={handleLogin}>
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