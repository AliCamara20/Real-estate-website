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
                    onChange={ e => onHandleChange(e)}
                />   
            </div>
            { isVisible && <div className="dropdown_content">{dropdownContents ? dropdownContents : (<span>No option</span>) }</div>}
        </div>
    )
}

export default Dropdown