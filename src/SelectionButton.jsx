const FAQsButton = ({label, onSelect, faqType, isSelected, onActive}) => {
   return(
        <button className={isSelected ? 'faq_btn a_faq_btn' : 'faq_btn' }  onClick={ () =>{onSelect(faqType); onActive()} }>
            {label}
        </button>
    
   ) 
}

export default FAQsButton