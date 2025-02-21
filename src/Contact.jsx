import { CallToActionButton } from "./Packages"
import ContactInfo from "./ContactInfo"
import ContactForm from "./ContactForm"

const Contact = () =>{
  return  (
    <section className="contact property_list">
      <div className="prop_list_header">
        <div className="container">
          <div className="header_info">
            <h1 className="header_info_title">Contact</h1>
            <p className="header_info_desc">Get in Touch</p>
          </div>
        </div>
      </div>

      <section className="section contact_form_info">
        <div className="container">
          <div className="contact_form_info__row">
            <ContactForm />
          <ContactInfo />
          </div>
          
        </div>
        
      
      </section>
    </section>

    
  )
} 
export default Contact