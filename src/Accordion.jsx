import { useState } from "react"

const Accordion = ({children, header_name}) => {
    const [isActive, setIsActive] = useState(false);
    return(
        <div className="accordion">
            <div className="accordion_row accordion_header " onClick={() => setIsActive(!isActive)}>
                <p className="acc_head">{header_name}</p>
                <button className="accordion_btn" >
                    <svg width="20px" height="20px" className={isActive ? 'arrow_up' : 'arrow_down'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="#000000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
            <div className={isActive ? 'accordion_body accordion_visible' : 'accordion_body'}>
                {children}   
            </div>
        </div>
        
        
    )
    
}

export default Accordion