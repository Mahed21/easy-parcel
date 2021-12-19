import React from 'react';
import { Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../logo.png';
import img1 from '../1.png';
import img2 from '../2.png';
import img3 from '../3.png'
import img4 from '../4.png';

import './Header.css';
import UseFirebase from '../Hook/UseFirebase';


const Header = () => {
    const {user,logOut}=UseFirebase();
    console.log(user);
    return (
        <div>
         <Navbar bg="" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img src={img} alt=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    
                    
                    <NavDropdown title="Services" id="basic-nav-dropdown" className='ankor'>
                    <NavDropdown.Item href="" className='ankor'><img src={img1} alt="" className='me-2'/  >Action</NavDropdown.Item>
                    <NavDropdown.Item href="" className='ankor'><img src={img2} alt="" className='me-2'/  >Another action</NavDropdown.Item>
                    <NavDropdown.Item href="" className='ankor'><img src={img3} alt="" className='me-2'/  >Something</NavDropdown.Item>
                    <NavDropdown.Item href="" className='ankor'><img src={img4} alt="" className='me-2'/  >Something</NavDropdown.Item>
                    
                    </NavDropdown>

                    <Link to="/home" className='ankor mt-2'>Home</Link>

                    <NavDropdown title="Send Parcel" id="basic-nav-dropdown" className='ankor'>
                    <NavDropdown.Item href="" className='ankor'>Action</NavDropdown.Item>
                    <NavDropdown.Item href="" className='ankor'>Another action</NavDropdown.Item>
                    <NavDropdown.Item href="" className='ankor'>Something</NavDropdown.Item>
                    
                    </NavDropdown>

                    <NavDropdown title="more" id="basic-nav-dropdown" className="navbar-dropdown ankor">
                    <div className='row' >
                        <div className='col-lg-6'>
                        <NavDropdown.Item href="" className='ankor'>Action</NavDropdown.Item>
                        <NavDropdown.Item href="" className='ankor'>Another action</NavDropdown.Item>
                         <NavDropdown.Item href="" className='ankor'>Something</NavDropdown.Item>
                        </div>
                        <div className='col-lg-6'>
                        <NavDropdown.Item href="" className='ankor'>Action</NavDropdown.Item>
                        <NavDropdown.Item href="" className='ankor'>Another action</NavDropdown.Item>
                         <NavDropdown.Item href="" className='ankor'>Something</NavDropdown.Item>
                        </div>

                    </div>
                  
                    </NavDropdown>
                    <div className='ms-auto d-flex'>
                        {
                            !user.email? <Link to="/login" className="sign p-1 ps-2 pe-2">Login</Link>:<Link to="" className="sign p-1 ps-2 pe-2" onClick={logOut}>LogOut</Link>
                        }
                        {
                            user.email?<h4 className='ms-2'>{user.displayName}</h4>:''
                        }
                       
                    </div>
                </Nav>
                </Navbar.Collapse>
            </Container>
</Navbar>
        </div>
    );
};

export default Header;