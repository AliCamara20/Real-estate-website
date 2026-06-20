import Navbar from "./Navbar"
import LogInPage from "./LogInPage";
import SignUp from "./SignUp";
import Footer from "./Footer";
import {useState } from "react";
import { Outlet } from "react-router-dom";
import AI_Agent from "./AI_Agent";
const Layout  = () => { 
    const [show, setShow] = useState(false);
    const[isVisible, setIsVisible] = useState(false);
    const[darkmode, setDarkmode] = useState(false);
    let l_className = 'layout';
    if(darkmode) l_className  = 'layout_darkmode'
    function handleDarkmode(){
        setDarkmode(!darkmode)
        console.log(`darkmode: ${darkmode}`);
    }
    
    return(
        <section className={l_className}>
        <Navbar 
            onShow={() => setShow(true)} 
            isVisible={isVisible} 
            onVisible={(state) => setIsVisible(state)} 
        />    
        {show && <LogInPage hideshow={() => setShow(false)} />}
        <Outlet /> 
        <AI_Agent />
        <SignUp />
        <Footer onVisible={state => setIsVisible(state)} />
        </section>
        

    )
}

export default Layout