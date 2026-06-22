import { useState } from "react"
import FAQsButton from "./SelectionButton"

const FAQsButtons = ({faqs, onSelect}) => {
    const [faqsType, setFaqsType] = useState('search');
    return(
        <div className="faq_btns">
            {faqs.map( faq => 
            <FAQsButton label={faq.type} 
                onSelect={onSelect}
                faqType={faq.type} key={faq.type}
                isSelected={faqsType === faq.type}
                onActive={() => setFaqsType(faq.type)}
            />
            )}
        </div>
    )
}

export default FAQsButtons