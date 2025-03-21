import logo from './assets/resido_logo.svg';
import resido_logo from './assets/resido_logo2.webp'
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLinks from './NavLinks';



const Navbar = ({onShow, isVisible, onVisible}) => {
    let navClassName = 'navbar'
    if(isVisible === true) navClassName = 'navbar nav-visible';


    const layoutRef = useRef(null)

    useEffect(() => {
        layoutRef.current.nextElementSibling.scrollIntoView({
            behavior: 'smooth', 
            block: 'nearest',
            inline: 'center'
        })
            
    }, [isVisible]);

    return(
        
        <header  ref={layoutRef} >
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
                    
                        <li className="nav_item  property" onClick={onShow}>
                            <svg className='add_prop' id="Capa_1" enableBackground="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="256" x2="256" y1="512" y2="0"><stop offset="0" stopColor="#c3ffe8"/><stop offset=".9973" stopColor="#f0fff4"/></linearGradient><linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="256" x2="256" y1="371.5" y2="140.5"><stop offset="0" stopColor="#9cffac"/><stop offset="1" stopColor="#00b59c"/></linearGradient><g><g><circle cx="256" cy="256" fill="url(#SVGID_1_)" r="256"/></g><g><g><path d="m211.588 211.466h17.765v80.017c0 4.914 3.973 8.891 8.882 8.891h35.529c4.91 0 8.882-3.977 8.882-8.891v-80.017h17.765c3.452 0 6.575-1.997 8.05-5.123 1.457-3.117.989-6.807-1.232-9.464l-44.412-53.345c-3.365-4.046-10.27-4.046-13.636 0l-44.412 53.345c-2.22 2.657-2.689 6.347-1.232 9.464 1.476 3.126 4.599 5.123 8.051 5.123zm186.53 71.126h-71.059c-3.365 0-6.436 1.902-7.946 4.915l-15.301 30.649h-95.624l-15.301-30.649c-1.509-3.013-4.58-4.915-7.946-4.915h-71.059c-4.91 0-8.882 3.977-8.882 8.891v71.126c0 4.914 3.973 8.891 8.882 8.891h284.235c4.91 0 8.882-3.977 8.882-8.891v-71.126c.001-4.915-3.972-8.891-8.881-8.891z" fill="url(#SVGID_2_)"/></g></g></g></svg>
                            <span className="item_name">Add Property</span>
                        </li>
                        <li className="nav_item signIn" onClick={onShow}>
                            <svg  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
                            <span className="item_name">Sign In</span>
                        </li>   
                    </ul>

                    
                </nav>
            </div>
            
        </header>
    )
}

export default Navbar