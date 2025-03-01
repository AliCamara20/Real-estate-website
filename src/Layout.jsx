import Navbar from "./Navbar"
import LogInPage from "./LogInPage";
import SignUp from "./SignUp";
import Footer from "./Footer";
import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import AI_Agent from "./AI_Agent";
const Layout  = () => {
    const [show, setShow] = useState(false);
    const[isVisible, setIsVisible] = useState(false); 
    
    return(
        <section className="layout">
        <Navbar onShow={() => setShow(true)} isVisible={isVisible} onVisible={(state) => setIsVisible(state)}  />
        {show && <LogInPage hideshow={() => setShow(false)} />}
        <Outlet /> 
        <AI_Agent />
        <SignUp />
        <Footer onVisible={state => setIsVisible(state)} />
        </section>
        

    )
}

export default Layout