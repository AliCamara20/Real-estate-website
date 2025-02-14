import homeIcon from './assets/home.svg'
import mailIcon from './assets/envelope.svg'
import phoneIcon from './assets/c-phone.svg'
const ContactInfo = () => {
    return(
        <div className="contact_info">
            <h2 className="contact_info_header">Get In Touch</h2>
            <p className="contact_info_details">
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="contact_info__info">
                <img src={homeIcon} alt="" className="contact_info_img" />
                <div>
                    <h4 className="contact_info__info_header">Reach Us</h4>
                    <p className="contact_info__info_detail">
                        2512, New Market, Eliza Road, Sincher 80 CA, 
                        Canada, USA
                    </p>
                </div>
                
            </div>

            <div className="contact_info__info">
                <img src={mailIcon} alt="" className="contact_info_img" />
                <div>
                    <h4 className="contact_info__info_header">Drop A Mail</h4>
                    <p className="contact_info__info_detail">support@Rikada.com Rikada@gmail.com</p>
                </div>
                
            </div>

            <div className="contact_info__info">
                <img src={phoneIcon} alt="" className="contact_info_img" />
                <div>
                    <h4 className="contact_info__info_header">Call Us</h4>
                    <p className="contact_info__info_detail">
                        (41) 123 521 458 +91 235 548 7548
                    </p>
                </div>
                
            </div>
           
        </div>
    )
}

export default ContactInfo