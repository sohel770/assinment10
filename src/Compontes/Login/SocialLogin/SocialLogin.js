import React from 'react';
import logo from '../../../images/google.png'

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='bg-primary w-50 ' style={{ height: '1px' }}></div>
                <p className='mt-2 px-2'>or</p>
                <div className='bg-primary w-50 ' style={{ height: '1px' }}></div>
            </div>
            <div className=''>
                
                <button className='btn btn-primary d-block w-50  mx-auto mb-3'>
                    <img src={logo} alt="" />
                    Google Sign In
                    </button>
            </div>
        </div>
    );
};

export default SocialLogin;