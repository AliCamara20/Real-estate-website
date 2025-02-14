import { useState } from "react"
import { CallToActionButton } from "./Packages";
const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return(
        <form action="" id="contact-form" className="contact_form">
              <div className="row contact_form_inputs">
                <div className="input_box contact_form_input_text">
                  <label htmlFor="name">Name <span className="asterisk">*</span></label>
                  <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" id="name" />
                     {name.length === 0 && <label htmlFor="">This field is required</label>}
                </div>
                <div className="input_box contact_form_email">
                  <label htmlFor="email">Email <span className="asterisk">*</span></label>
                  <input type="email" id="email"  placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                  {email.length === 0 && <label htmlFor="">This field is required</label>}
                </div>
              </div>
              <div className="input_box">
                <label htmlFor="text_area">Message <span className="asterisk">*</span></label>
                <textarea name="" id="text_area" className="enq_description review_message contact_message" placeholder="Message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                {message.length === 0 && <label htmlFor="">This field is required</label>}
              </div>
              <CallToActionButton label={'Submit Request'} />
            </form>
    )
}

export default ContactForm