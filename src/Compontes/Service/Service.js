import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'



const Service = ({ service }) => {
    const { img, name, price, description ,id} = service

const navigate=useNavigate()

   const navigateToService = (id) => {
    navigate(`/services/${id}`)
   }

    return (
        <div>
            
            <div className="card-Container">
                <div class="card">
                    {/* <img src="..." class="card-img-top" alt="..."> */}
                    <img className='w-100' style={{height:'300px'}} src={img} alt="" />
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <h4 class="card-text">Price:${price}</h4>
                            <p class="card-text">{description}</p>
                            <button onClick={()=>navigateToService(id)} class="btn btn-primary">Go somewhere</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Service;