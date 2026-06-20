import { useState } from "react"

const FAQsPanels = ({faq}) => {
    const defaultExpandable = faq.questions[0];
    const [isExpanded, setIsExpanded] = useState(defaultExpandable);
    console.log(`FAQs: ${faq.questions}`);
    return(
        <div className="faq_panels">
            {faq.questions.map( quest => {
                return(
                    <FAQPanel 
                    key={quest.quest} 
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
        <div className="faq_panel" onClick={onExpand}>
            <p className="faq_panel_question" >{faq.quest}</p>
            {isExpanded &&
                <p className="faq_panel_answer">
                   {faq.ans}
                    
                </p>
}           
            
        </div>
    )
}

export default FAQsPanels