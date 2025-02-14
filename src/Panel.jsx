import { useState } from "react";
const Panel = ({label, children}) => {
    const [isActive, setIsActive] = useState(false);

    const handleActiveClick = () => {
        setIsActive(!isActive);
    } 
    return(
        <div className="panel" >
            <div className="accordion_row" onClick={handleActiveClick}>
               <h5 className="panel_name" >{label}</h5>
               <span className="panel_icon" > {isActive ? '-' : '+'}</span>
           </div>
              { isActive && children}

        </div>
        
    )
}

export default Panel