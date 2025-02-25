import { useState } from "react";
const Dropdown = ({query, dropdownContents, children, onHandleChange}) => {
    const [isVisible, setIsVisible]  = useState(false);
    
    return(

        <div className="dropdown" >
            <div className="dropdown_inputField">
                {children}
                <input type="text" className="dropdown_input"
                    value={query} 
                    onClick={ () => setIsVisible(!isVisible)}
                    onChange={onHandleChange}
                />   
            </div>
            { isVisible && <div className="dropdown_content">{ isVisible && dropdownContents}</div>}
        </div>
    )
}

export default Dropdown