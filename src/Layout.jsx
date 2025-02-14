import Navbar from "./Navbar"
import LogInPage from "./LogInPage";
import SignUp from "./SignUp";
import Footer from "./Footer";
import { useState } from "react";
import { Outlet } from "react-router-dom";
const Layout  = () => {
    const [show, setShow] = useState(false);
    return(
        <>
        <Navbar onShow={() => setShow(true)} />
        {show && <LogInPage hideshow={() => setShow(false)} />}
        <Outlet /> 
        <SignUp />
        <Footer />
        </>
        

    )
}

export default Layout