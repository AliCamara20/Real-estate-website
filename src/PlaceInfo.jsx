import MidSection from "./MidSection"
import likeIcon from './assets/like.svg'
import shuffleIcon from './assets/shuffle.svg'
import shareIcon from './assets/curve.svg'
import Accordions from "./Accordions"
import Profile from "./Profile"
import EnquiryForm from "./EnquiryForm"
import InterestForm from "./InterestForm"
import FeaturedProperties from "./FeaturedProperty"
import RatingStars from "./RatingStars"

const PlaceInfo = ({place, handleSubmitForm}) => {
    return(
        <div className="place_info">
            <div className="container">
                <div className="place_info_container">
                    <InfoLeftColumn place={place} handleSubmitForm={handleSubmitForm} />
                    <InfoRightColumn />
                </div>
                
            </div>
            
        </div>
    )
}

const InfoLeftColumn = ({place, handleSubmitForm}) => {
  return(
    <div className="info_col info_col_left">
        <div className="p_details">
            <p className="property_status">Sale</p>
            <h3 className="place_name">{place.name}</h3>
            <p className="col_detail location_detail ">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
                <span className="address">778 Panama City, FL</span>
            </p>
            <h3 className="prop_price">${place.price}</h3>
            <div className="prop_detail_bottom" >
                <MidSection numOfBeds={place.info.numOfBeds} numOfBath={place.info.numOfBaths} sqft={place.info.sqft} />
            </div>    
        </div>
        <Accordions place={place}handleSubmitForm={handleSubmitForm} />
        
    </div>
    
  )
}

const InfoRightColumn = () => {
    return(
        <div className="info_col info_col_right">
            <div className="icon_boxes">
                <div className="top_boxes">
                    <div className="icon_box share_box">
                        <img src={shareIcon} alt="" className="icon_img" />
                        <span className="icon_text">Share</span>
                    </div>
                    <div className="icon_box save_box">
                        <img src={likeIcon} alt="" className="icon_img" />
                        <span className="icon_text">Save</span>
                    </div>
                </div>

                <div className="icon_box compare_box">
                    <img src={shuffleIcon} alt="" className="icon_img" />
                    <span className="icon_text">Add to compare</span>
                </div>
             
            </div>
            <div className="property_enquiry info_col_right__col">
                <Profile />
                <EnquiryForm />
            </div>
            <div className="interest_calc info_col_right__col">
                <InterestForm />
            </div>
            <FeaturedProperties />
        </div>
    )
}

export default PlaceInfo