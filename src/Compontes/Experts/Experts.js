import React, { useEffect } from 'react';
import {useState} from 'react'
import Expect from '../Expect/Expect';
import './Experts.css'



const Experts = () => {

    const [expects,setExpects]=useState([])
console.log(expects)
    useEffect(()=>{  
        fetch('gym-trainer.json')
        .then(res =>res.json())
        .then(data=>setExpects(data))
    },[])
    return (
        <div className='container'>
            <h2 className='text-center text-primary p-5'>Expert Trainers </h2>
            <div className='row'> 
            <div className='services-container'>
              {
                  expects.map(expect=> <Expect 
                  key={expect.key}
                  expect={expect}
                  ></Expect>)
              }
            </div>
            </div>
        </div>
    );
};

export default Experts;