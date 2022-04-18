import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css'
import google from '../../images/google.png'
import { useLocation, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';


const Login = () => {
const navigate=useNavigate()
 const emailRef=useParams('')
 const passwordRef=useParams('')

 const [
  signInWithEmailAndPassword,
  user,
  loading,
  error,
] = useSignInWithEmailAndPassword(auth);

const location=useLocation()
let from = location.state?.from?.pathname || "/";



const handleonSubmit=event=>{
    event.preventDefault();
    const email=emailRef.current.value
    const password=passwordRef.current.value
    console.log(email, password);
    signInWithEmailAndPassword(email, password)
}
if(user){
  navigate(from, { replace: true });
}



const navigateRegister=event=>{
  navigate('/register')
}

    return (
        <div className="container w-50 mx-auto login">
            <h3 className='text-primary text-center'>Please Login</h3>
           <Form onSubmit={handleonSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
  </Form.Group>


<p className="">New to gym <span className='text-primary' onClick={navigateRegister}>Please Register</span></p>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;