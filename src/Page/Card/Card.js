import React from 'react';
import { Button } from 'react-bootstrap';
import './Card.css'
import img from '../../1.png';
import img1 from '../../2.png';
import img2 from '../../3.png';
import img3 from '../../4.png';


const Card = () => {
    return (
        <div className='mt-5 mb-3'>
        
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                <div class="col">
                    <div class="card h-100">
                    <img src={img} class="card-img-top w-50" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Automatically turn new sell into delivery order</p>
                    </div>
                    <i className="fas fa-arrow-right d-flex justify-content-end mb-2 me-2"></i>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
                    <img src={img1} class="card-img-top w-50" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Auto update and each shipment</p>
                    </div>
                    <i className="fas fa-arrow-right d-flex justify-content-end mb-2 me-2"></i>
                  
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
                    <img src={img2} class="card-img-top w-50"  alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Automated buyer seller to choose prefered courier</p>
                    </div>
                    <i className="fas fa-arrow-right d-flex justify-content-end mb-2 me-2"></i>
                   
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
               
                    <img src={img3} class="card-img-top w-50" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Manage all delivary in your website</p>
                    </div>
                    <i className="fas fa-arrow-right d-flex justify-content-end mb-2 me-2"></i>
                 
                    
                    </div>
                </div>

                </div>
                
        </div>
    );
};

export default Card;