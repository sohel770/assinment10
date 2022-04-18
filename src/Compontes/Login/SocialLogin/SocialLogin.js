import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/google.png'
import Loading from '../../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate=useNavigate()

    let errorElement;
    if (error) {
        errorElement = <p className="text-danger">Error: {error.message}</p>

    }
    if(loading){
        return <Loading></Loading>
      }
      if(user){
        navigate('/home')
      }
    

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='bg-primary w-50 ' style={{ height: '1px' }}></div>
                <p className='mt-2 px-2'>or</p>
                <div className='bg-primary w-50 ' style={{ height: '1px' }}></div>
            </div>
            {errorElement}
            <div className=''>
                
                <button
                onClick={() =>signInWithGoogle()}
                className='btn btn-primary d-block w-50  mx-auto mb-3'>
                    <img src={logo} alt="" />
                    Google Sign In
                    </button>
            </div>
        </div>
    );
};

export default SocialLogin;