import { useState } from "react";
const Dropdown = ({query, dropdownContents, children, onHandleChange, visible, onVisible}) => {
    const [isVisible, setIsVisible]  = useState(false);
    
    return(

        <div className="dropdown" >
            <label className="dropdown_inputField">
                {children}
                <input type="text" className="dropdown_input"
                    value={query} 
                    onClick={onVisible}
                    onChange={ e => onHandleChange(e)}
                    placeholder="Select..."
                />   
            </label>
            { visible  && <div className="dropdown_content">{dropdownContents ? dropdownContents : (<span>No option</span>) }</div>}
        </div>
    )
}

export default Dropdown