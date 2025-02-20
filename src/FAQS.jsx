import hero_image from './assets/river_side.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FAQsColumns from './FAQSColumns'
import FAQsButtons from './SelectionButtons'
import { useState } from 'react'
import { faqs  } from './Data'
import FAQsPanels from './FAQPanel'
const FaQS = () => {
    
    const [selectedFaqsType, setSelectedFaqsType] = useState('general');
    const selectedFaqs = faqs.find( faq => faq.type === selectedFaqsType)
    console.log(selectedFaqsType);
    return(
        <section className="faqs">
            <div className="faqs_hero">
                <div className="container_container">
                    <div className="container">
                        <div className="faqs_hero_text">
                            <h1 className="faqs_hero_text__header">
                                Frequently Asked Questions
                            </h1>
                            <form action="" className="faqs_hero_form">
                                <input type="text" className="faqs_hero_form__input"  placeholder='Search Your Query...' />
                                <button className='faqs_hero_form__submit_btn' >
                                    <FontAwesomeIcon icon='fa-solid fa-search' size='xl' className='faqs_search_btn' />
                                </button>
                            </form>
                        </div>   
                    </div>
                </div>
            </div>
            <FAQsColumns />
            <div className="container">
            <div className="faqs_section">
                <FAQsButtons faqs={faqs} onSelect={ faq => setSelectedFaqsType(faq)}  />
                <FAQsPanels faq={selectedFaqs} key={selectedFaqs.type}   />
            </div>
            </div>
            
            
        </section>
    )
    
}



export default FaQS