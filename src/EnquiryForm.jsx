const EnquiryForm = () => {
    return(
        <form className="enquiry_form">
            <div className="input_box">
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Your Name" id="name" />
            </div>
            <div className="input_box">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your Email" />
            </div>
            <div className="input_box">
                <label htmlFor="phone">Phone No.</label>
                <input type="tel" placeholder="+001-234-5678" />
            </div>
            <textarea name="" id="" className="enq_description review_message" placeholder="I'm interested in this property"></textarea>
            <input type="submit" className="enq_submit_btn" value={'Send Message'} />
        </form>
    )
}
export default EnquiryForm