import React from 'react';
import { useParams } from 'react-router-dom';

const ServicesDetails = () => {
    const {serviceId}=useParams()
    return (
        <div>
            <h3>this is a service:{serviceId}</h3>
        </div>
    );
};

export default ServicesDetails;