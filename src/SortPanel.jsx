import { useState } from "react";
const SortPanel = ({children}) => {

    const [isActive, setIsActive] = useState(false);
    const handleActiveClick = () => {
        setIsActive(!isActive);
    } 

    return(
        <>
            <button className="sort_panel_btn" onClick={handleActiveClick}>
                <span className="latest">Latest</span> 
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M480-360 280-560h400L480-360Z"/></svg>
            </button>
            {isActive && children}
        </>
        
    )
    
}

export default SortPanel