import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';


const Logins = () => {
const emailRef=useRef('')
const passwordRef=useRef('')
const navigate=useNavigate()
const location=useLocation()

let from = location.state?.from?.pathname || "/";

const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);


  if(user){
    navigate(from, { replace: true })
  }
const handleonSubmit=event => {
    event.preventDefault()
    const email=emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password)
}

const navigateRegister=event => {
    navigate('/register')
}
    return (
        <div className="container w-50 mx-auto">
            <h3 className="text-primary text-center">Please Login</h3>
            <Form onSubmit={handleonSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p >New Strength Center <span className='text-primary' onClick={navigateRegister} >Please Register</span> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Logins;