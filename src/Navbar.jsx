import logo from './assets/resido_logo.svg';
import resido_logo from './assets/resido_logo2.webp'
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLinks from './NavLinks';



const Navbar = ({onShow, isVisible, onVisible}) => {
    let navClassName = 'navbar'
    if(isVisible === true) navClassName = 'navbar nav-visible';


    return(
        
        <header   >
            <div className="container row">
                
                <div className="nav_list sm_row">
                    <div className="sm_item" style={{width: '100px', color: 'black'}}>
                        <Link to='/' className="logo_name" >
                            <div className="logo_img_box">
                                <img src={logo} alt="" className='log_img'  />         
                            </div>             
                        </Link> 
                    </div>
                    <div className="sm_item">
                        <FontAwesomeIcon icon="fa-solid fa-bars" size='xl' className='menu' onClick={() => onVisible(true)}  />
                    </div>
                    
                </div>
                <nav className={navClassName}>
                    <ul className="nav_list nav_list__lg ">
                        <li className="nav_item close_item" >
                            <span className="close" onClick={() => onVisible(false)}>&times;</span>
                        </li>
                        <NavLinks onVisible={ state => onVisible(state)}  />
                        
                        <li className="nav_item  property">
                            <Link to={"/signup"}>Sign up</Link>
                        </li>
                        
                        <li className="nav_item signIn" onClick={onShow}>
                            <svg  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
                            <span className="item_name">Log in</span>
                        </li>  
                        
                    </ul>
                </nav>
            </div>        
        </header>
    )
}

export default Navbar