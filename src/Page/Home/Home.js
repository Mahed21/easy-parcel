import React from 'react';
import './Home.css';
import img from '../../banner.png';
import Card from '../Card/Card';
import Body from '../Body/Body';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
        <div className='container'>
            <div className='row row-cols-lg-2 row-col-md-1 row-col-1'>
                <div className='col'>
                 <img src={img} alt=""/>
                </div>
                <div className='col text'>
                    <h3>Powerful Parcel Delivery API <br/>For Simplified Shipping</h3>
                    <hr/>
                    <p>If you have your own website and selling online, our API can help to simplify and accelerate your daily delivery routine. You can use the API to automatically book your deliveries once a sale is made and skip manually ordering.</p>
                    <button className='p-2 mt-3 banner-btn'>! Find out more</button>

                </div>

            </div>
            <Card></Card>
            
            </div>
            <Body></Body>
          
           
           
        </div>
    );
};

export default Home;