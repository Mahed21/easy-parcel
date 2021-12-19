import React from 'react';
import img from '../../bd.png';
import './Body.css';
import img1 from '../../ratte.png';
import img2 from '../../order.png';
import img3 from '../../waybill.png';
import img4 from '../../payment.png';
import img5 from '../../tracking1.png';
import img6 from '../../indi-api.png'
import img7 from '../../market-api.png';
import img8 from '../../88.png';
import img9 from '../../9.png';
import img10 from '../../10.png';
import img11 from '../../11.png';
import img12 from '../../66.png';
import img13 from '../../77.png';


const Body = () => {
    
    const ManageOrder=()=>
    {
        alert('hii')
    }
    return (
        <div className='mt-5 back pt-5 pb-5'>
          <div className='container'>
              <div className='row row-col-lg-2'>
              <div className='col'>
              <img src={img} alt="" className='img-fluid'/>

              </div>
              <div className='col ms-3'>
                  <div className='d-flex'>
                      <img src={img1} alt="" className=''/>
                      <h5 className=' ms-5' onClick={ManageOrder}>Check Rate</h5>
                     
                  </div>
                  
                  <div className='d-flex mt-2'>
                      <img src={img2} alt="" className=''/>
                      <h5 className='ms-3'>create delivary order</h5>
                      <p className=' ms-5'></p>
                  </div>
                  <div className='d-flex mt-2'>
                      <img src={img3} alt=""/>
                      <h5 className='ms-3'>Generate air waybill on your website</h5>
                      <p className=' ms-5'></p>
                  </div>
                  <div className='d-flex mt-2'>
                      <img src={img4} alt=""/>
                      <h5 className='ms-3'>Payment</h5>
                      <p className=' ms-5'></p>
                  </div>
                  <div className='d-flex mt-2'>
                      <img src={img5} alt=""/>
                      <h5 className='ms-3'>Tracking</h5>
                      <p className=' ms-5'></p>
                  </div>
              
                  

              </div>

              </div>

          </div>

          
              <h3 className='mt-5 text-center text'>How Much Does It Cost?</h3>
              <p className='mt-5 text-center'>It’s FREE! You would just need to pay for the delivery orders you’ve made.</p>
              
              <h3 className='mt-5 text-center text'>Which API Suits You Best??</h3>


              {/* another card */}
              <div className='container mt-5 pb-5'>
              <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card1">
                        <div className='d-flex justify-content-center'>
                        <img src={img6} class="card-img-top w-25 mt-3" alt="..."/>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title text-center">Individual API</h5>
                            <p class="card-text text-center">* Mainly for individual website with only one owner<br/>
                               * One seller with hardcoded e-commerce website<br/>
                                *Owner of a website / sole owner</p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card1">
                        <div className='d-flex justify-content-center'>
                        <img src={img7} class="card-img-top w-25 mt-3" alt="..."/>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title text-center">Marketplace API</h5>
                            <p class="card-text text-center">* Mainly for individual website with only one owner<br/>
                               * One seller with hardcoded e-commerce website<br/>
                                *Owner of a website / sole owner</p>
                        </div>
                        </div>
                    </div>
                   
                    </div>
                    </div>
              {/* another card end */}

              {/* services */}
              <h3 className='mt-5 text text-center'>
                  Delicious Food
              </h3>
     
              <div className='container'>
                  <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card h-100">
                        <img src={img8} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Cheese</h5>
                            <button className='ps-3 pe-3 sign'>Order</button>
                        </div>
                       
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src={img10}class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Margarine</h5>
                            <button className='ps-3 pe-3 sign'>Order</button>
                            
                        </div>
                       
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src={img9} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Cottage cheese</h5>
                            <button className='ps-3 pe-3 sign'>Order</button>
                            
                        </div>
                       
                        </div>
                    </div>
                    </div>

              </div>
              {/* services */}
              
        </div>
    );
};

export default Body;