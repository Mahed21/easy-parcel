import React, { useEffect, useRef, useState } from 'react';
import './RunningText.css'

const RunningText = () => {
   const [Days,setDays]=useState("00");
   const [Hours,setHours]=useState("00");
   const [Minute,setMinute]=useState("00");
   const [Second,setSecond]=useState("00");
   
   let interval=useRef();
    const countdown=()=>
    {
      
        const countDate= new Date("Feb 22, 2022 00:00:00").getTime();

      
        interval = setInterval(()=>
        {
          const now= new Date().getTime();
          const gap=countDate-now;
          if(gap<0){
            clearInterval(interval.current);
          }
          else{
          const second = 1000;
          const minute =second * 60;
          const hour= minute*60;
          const day= hour*24;
          const textday=Math.floor(gap/day);
          const texthour=Math.floor((gap%day)/hour);
          const textminute=Math.floor((gap%hour)/minute);
          const textsecond=Math.floor((gap%minute)/second);
          //setDays(textday);
          // console.log(textday);
          // console.log(texthour)
          // console.log(textminute)
          // console.log(textsecond)
   
          setDays(textday);
          setHours(texthour);
          setMinute(textminute);
          setSecond(textsecond);
          }

        })
       
      

}
   useEffect(()=>
   {
    countdown();
    return ()=>
    {
      clearInterval(interval.current);
    }
   })
      
    
    return (
        <div className="run">
         
            <marquee >
              <div className="d-flex">
              <span><p>Days left for 50% offer</p></span>
              
              <section className="d-flex ms-4">
              <div className='class-days '>
                <button className='btn'>{Days}</button>
              </div>
              <div className='container-hour'>
              <button className='btn ms-2'>{Hours}</button>
              </div>
              <div className='container-minute'>
              <button className='btn ms-2'>{Minute}</button>
              </div>
              <div className='container-second'>
              <button className='btn ms-2'>{Second}</button>
              </div>
              </section>
              </div>
              
            </marquee> 
        
        </div>
    );
};

export default RunningText;