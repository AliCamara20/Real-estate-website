import { useState } from "react"

const FAQsPanels = ({faq}) => {
    const defaultExpandable = faq.questions[0];
    const [isExpanded, setIsExpanded] = useState(defaultExpandable);
    return(
        <div className="faq_panels">
            {faq.questions.map( quest=> {
                return(
                    <FAQPanel 
                    key={quest} 
                    faq={quest} 
                    isExpanded={isExpanded === quest}
                    onExpand={() => setIsExpanded(quest)}
                    />
                )
            })}
            
        </div>
    )
}


const FAQPanel = ({faq, isExpanded, onExpand}) => {
    return(
        <div className="faq_panel">
            <p className="faq_panel_question" onClick={onExpand}>{faq}</p>
            {isExpanded &&
                <p className="faq_panel_answer">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life 
                    accusamus terry richardson ad squid. 3 wolf moon officia 
                    aute, non cupidatat skateboard dolor brunch. Food truck 
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon 
                    tempor, sunt aliqua put a bird on it squid single-origin.
                    
                </p>
}           
            
        </div>
    )
}

export default FAQsPanels