import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServicesDetails = () => {
    const {serviceId}=useParams()
    return (
        <div>
            <h3>this is a service:{serviceId}</h3>
            <Link to='/checkout'>  
            <button className='btn btn-primary'>Proceed Cheackout</button>
            </Link>
        </div>
    );
};

export default ServicesDetails;