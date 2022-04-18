import React from 'react';
import './Register.css'
import {useNavigate} from 'react-router-dom'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import Loading from '../Loading/Loading';



const Register = () => {

    const navigate=useNavigate()
    const navigateRegister=event => {
        navigate('/login')
    }

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{emailVerificationOptions:true});
      
      if(loading){
        return <Loading></Loading>
      }
if(user){
    navigate('/home')
}


const handleonSubmit = (event) => {
    event.preventDefault()
    const name=event.target.name.value
    const email=event.target.email.value
   const password=event.target.password.value

   createUserWithEmailAndPassword(email, password)
   
}


    return (
        <div className='container-register'>
           
            <div className='register-form'>
            <h3 className='text-center text-primary my-3'>Please Register</h3>
            <form onSubmit={handleonSubmit}>
                <label htmlFor="Name">Name</label>
                <input type="text" name="name" placeholder="Enter Your Name" id="" />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" placeholder="Enter Your Email" />
                <label htmlFor="">Password</label>
                <input type="password" name="password" id="" placeholder="Enter Your Password" />
                {/* <input type="submit" value="Register" /> */}

                <p className="">Already have an account <span className='text-primary' onClick={navigateRegister}>Please Login</span></p>

                <button className='btn btn-primary text-center'>Register</button>
            </form>
           <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;