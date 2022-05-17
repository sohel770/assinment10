import React, { useEffect } from 'react';
import {useState} from 'react'
import Service from '../Service/Service';
import './Services.css'


const Services = () => {
  
    const [service,setService]=useState([])

    useEffect(() => {
    fetch('services.json')
    .then(res=>res.json())
    .then(data=>setService(data))

    },[])

    return (
        <div className='container'>
            <h3 className='text-center text-primary text-lg py-5'>Our Services</h3>
            <div className='row'> 
             <div className='services-container'> 
            {
                service?.map(service => <Service 
                key={service.id}
                service={service}
                ></Service>)
            }
            </div>
        </div>
        </div>
    );
};

export default Services;