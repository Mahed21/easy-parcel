import React from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import UseFirebase from '../../Hook/UseFirebase';
import './Login.css'

const Login = () => {
    const {googleSignIn,user}=UseFirebase();
    const location = useLocation();
    const history = useNavigate();
    const handleGoogle = (e) => {
     
      googleSignIn(location, history)
  }
    return (
        <div>
           <div className='login-div d-flex justify-content-center align-items-center'>
             <div>
             <button className='sign ps-5 pe-5 p-3' onClick={(e)=>{
                        e.preventDefault();
                        handleGoogle();

                    }}>Login With Google</button>
             </div>
             
            
          </div> 
        </div>
    );
};

export default Login;