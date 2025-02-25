import Accordion from "./Accordion"
import playBtn from './assets/playcircle__icon.svg'
import stackedImg from './assets/play-icon.jpg'
import LocationMap from "./Map"
import Stars from "./Stars"
import ReviewForm from "./ReviewForm"
import RatingStars from "./RatingStars"


const Accordions = ({place, handleSubmitForm, name, email, message, onNameChange, onEmailChange, onMessageChange}) => {

    const amenities = place.amenities.map( (amenity, index) => {
        return(
            <li className="amenity" key={index}>
                <span className="checked_icon">✔</span>
                <p className="a_detail">{amenity}</p>
            </li>
        )
    })

   
    return(
          <>
            <Accordion header_name={'Detail and Features'}>
                <table className="acc_table">
                    <tbody >
                        <tr className="t_info">
                            <td className="feature">Garage</td>
                            <td className="qntty">{place.info.garage}</td>
                        </tr>
                        <tr className="t_info">
                            <td className="feature">Area Size(sqft)</td>
                            <td className="qntty">{place.info.sqft}</td>
                        </tr>
                        <tr className="t_info">
                            <td className="feature">Bedroom</td>
                            <td className="qntty">{place.info.numOfBeds}</td>
                        </tr>
                        <tr className="t_info">
                            <td className="feature">Washroom</td>
                            <td className="qntty">{place.info.numOfBaths}</td>
                        </tr>
                    </tbody>
                </table>
            </Accordion>

            <Accordion header_name={'Description'}>
                <p className="prop_description">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered 
                    alteration in some form, by injected humour, or randomised words which don’t look even slightly 
                    believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t 
                    anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet 
                    tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
                    sunt explicabo.
                </p>

            </Accordion>

            <Accordion header_name={'Amenities'}>
                <ul className="amenities cards package_list">
                    {amenities}
                    
                </ul>
            </Accordion>
             
            <Accordion header_name={'Property Video'}>
                <div className="stacked">
                    <img src={stackedImg} alt="" className="stacked_img" />                  
                    <a href="https://youtu.be/4jnzf1yj48M?si=Sj3aMdbt5bQT0Cuk" className="video_link" target="_blank">
                    <button className="play_btn">
                        <img src={playBtn} alt="" className="btn_img"   />
                    </button>
                    </a>
                    
                </div>
            </Accordion>

            <Accordion header_name={'Floor Plan'}>
                 <ul className="plan_list package_list">
                    <li className="plan_item accordion_row">
                        <h4 className="plan_item__floor">First Floor</h4>
                        <p className="plan_item_sqft">740 sqft sqft</p>
                    </li>
                    <li className="plan_item accordion_row">
                        <h4 className="plan_item__floor">Second Floor</h4>
                        <p className="plan_item_sqft">710 sqft sqft</p>
                    </li>
                    <li className="plan_item accordion_row">
                        <h4 className="plan_item__floor">Third Floor</h4>
                        <p className="plan_item_sqft">520 sqft sqft</p>
                    </li>
                 </ul>
            </Accordion>
            <Accordion header_name={'Location'}>
                <LocationMap />
            </Accordion>
            <Accordion header_name={'Gallery'}>
                <div className="prop_gallery cards">
                    {place.gallery.map( c => <img  key={c} src={c} className="prop_gallery_img"/>)}
                </div>
            </Accordion>
            <Accordion header_name={'Rating'}>
                <p className="rating">Not yet Rated</p>
            </Accordion>
            <Accordion header_name={'Write a Review'}>
                <div className="property_review cards">
                    <div className="review">
                        <div className="review_item">
                            <p className="review_category">Property</p>
                            <RatingStars />
                        </div>   
                        <div className="review_item" >
                            <p className="review_category">Location</p>
                            <RatingStars />
                            
                        </div> 
                    </div>
                    
                    <div className="review">
                        <div className="review_item" >
                            <p className="review_category">Value for money</p>
                            <RatingStars />
                        </div>
                        <div className="review_item" >
                            <p className="review_category">Agent support</p>
                            <RatingStars />
                        </div>
                        
                    </div>
                    
                    <div className="review av_rating_col">
                        <h3 className="av_rating_num">5</h3>
                        <p className="average_rating rating">Average Rating</p>
                    </div>
                </div>
                <ReviewForm handleSubmitForm={handleSubmitForm} name={name} email={email} message={message}
                    onNameChange={onNameChange} onEmailChange={onEmailChange} onMessageChange={onEmailChange}
                    placeId={place.id}
                 />
            </Accordion>
            <Accordion header_name={'Reviews'}>
            {place.reviews > 0 ? 
                    place.review.map((review) =>{
                        return(
                            <div className="prop_reviews">
                               <p className="review_name">{review.name}</p>
                               <p className="review_name">{review.email}</p>
                               <p className="review_name">{review.message}</p>
                            </div>
                        )
                    }) : <p className="prop_reviews rating">Be the first one to rate this.</p> }
                
            </Accordion>
          </>
    ) 
}
export default Accordions