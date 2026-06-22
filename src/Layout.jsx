import Navbar from "./Navbar"
import LogInPage from "./LogInPage";
import SignUp from "./SignUp";
import Footer from "./Footer";
import {useState } from "react";
import { Outlet } from "react-router-dom";
import AI_Agent from "./AI_Agent";
import useScrollToTop from "./ScrollToTop";
const Layout  = () => { 
    const [show, setShow] = useState(false);
    const[isVisible, setIsVisible] = useState(false);
    const [showError, setShowError] = useState(false);    
    
    async function handleErrorMessage(){
        setShowError(true);
        
    }
    
    
    return(
        <section>
        <Navbar 
            onShow={() => setShow(true)} 
            isVisible={isVisible} 
            onVisible={(state) => setIsVisible(state)} 
        />    
        {show && <LogInPage 
            hideshow={() => setShow(false)} 
            erroMessage={showError} 
            handleErrorMessage={handleErrorMessage} />}
        <Outlet /> 
        <AI_Agent />
        <SignUp />
        <Footer onVisible={state => setIsVisible(state)} />
        </section>
        

    )
}

export default Layout