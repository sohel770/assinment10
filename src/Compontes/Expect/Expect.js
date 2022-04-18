import React from 'react';

const Expect = ({ expect }) => {
    const { name, img, id, price, description } = expect

    return (
        <div className='card-Container'>

            <div class="card">
                <div class="card-body">
                    <img style={{ width: "300px", height: '300px' }} src={img} alt="" />
                    <h5 class="card-title">{name}</h5>
                    <h4 class="card-text">Price: ${price}</h4>
                    <p>{description}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default Expect;