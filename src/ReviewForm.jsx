import { useState } from "react"
import { CallToActionButton } from "./Packages"

const ReviewForm = ({handleSubmitForm, name, email, message, onNameChange, onEmailChange, onMessageChange, placeId}) => {
    
    
    return(
        <form action="" className="review_form" onSubmit={e => handleSubmitForm(e, placeId)}>
            <textarea name="" id="" value={message} onChange={onMessageChange} className="review_message" placeholder="Message"></textarea>
            <div className="input_box top_boxes">
                <input type="text" placeholder="Your name" value={name} onChange={onNameChange} />
                <input type="email" name="" id="" placeholder="Your Email" value={email} onChange={onEmailChange}/>
            </div>
            <CallToActionButton  label={'Submit Review'}  />
        </form>
    )
}

export default ReviewForm