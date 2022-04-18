import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css'
import google from '../../images/google.png'
import { useLocation, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
const navigate=useNavigate()
 const emailRef=useParams('')
 const passwordRef=useParams('')
 const [sendPasswordResetEmail] = useSendPasswordResetEmail(
  auth
);
 const [
  signInWithEmailAndPassword,
  user,
  loading,
  error,
] = useSignInWithEmailAndPassword(auth);

const location=useLocation()
let from = location.state?.from?.pathname || "/";

let errorElement;
if (error) {
    errorElement = <p className="text-danger">Error: {error.message}</p>

}
if(loading){
  return <Loading></Loading>
}
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

const resetPassword =async () => {
  const email=emailRef.current.value
  if(email){
    await sendPasswordResetEmail(email);
  toast('Sent email');
  }else{
    toast('Please Enter Your Email')
  }
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


<p className="">New Strength Center
 <span className='text-primary' onClick={navigateRegister}> Please Register</span></p>

<p className="">Forget Password <span className='text-primary' onClick={resetPassword}>Reset Password</span></p>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
  {errorElement}
</Form>
<SocialLogin></SocialLogin>
<ToastContainer />
        </div>
    );
};

export default Login;