import { useState } from "react";
const Dropdown = ({query, dropdownContents, children, onHandleChange, visible , onVisible, placeholder, type}) => {
    const [isVisible, setIsVisible]  = useState(false);
    
    return(

        <div className="dropdown" >
            <label className="dropdown_inputField">
                {children}
                <input type={type} className="dropdown_input"
                    value={query} 
                    //onClick={onVisible}
                    onMouseOver={onVisible}
                    onChange={e => onHandleChange(e)}
                    placeholder={placeholder}
                    min={5000}
                    step={1000}
                    
                />   
            </label>
            { visible  && <div className="dropdown_content">{dropdownContents ? dropdownContents : (<span>No option</span>) }</div>}
        </div>
    )
}

export default Dropdown