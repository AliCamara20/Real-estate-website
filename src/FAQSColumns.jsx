import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const FAQsColumns = () => {
    return (
        <section className="section">
            <div className="container faqs_columns row">
                <FAQSColumn>
                    <FontAwesomeIcon icon="fa-solid fa-basket-shopping" size="2xl" />
                    <h4 className="faqs_col_header">Contact Sales</h4>
                    <p className="faqs_col_detail">sales@rikadahelp.co.uk</p>
                    <p className="faqs_col_detail">+01 215 245 6258</p>
                </FAQSColumn>
                <FAQSColumn>
                    <FontAwesomeIcon icon="fa-solid fa-user-tie" size="2xl" />
                    <h4 className="faqs_col_header">Contact Sales</h4>
                    <p className="faqs_col_detail">sales@rikadahelp.co.uk</p>
                    <p className="faqs_col_detail">+01 215 245 6258</p>
                </FAQSColumn>
                <FAQSColumn>
                    <FontAwesomeIcon icon="fa-solid fa-comments" />
                    <h4 className="faqs_col_header">Start Live Chat</h4>

                    <p className="faqs_col_detail">+01 215 245 6258k</p>
                    <p className="faqs_col_detail live_chat">Live chat</p>
                </FAQSColumn>
            </div>
            
        </section>
    )
}

const FAQSColumn = ({children}) => {
    return(
        <div className="faqs_col">
            {children}
        </div>
    )
    
}

export default FAQsColumns