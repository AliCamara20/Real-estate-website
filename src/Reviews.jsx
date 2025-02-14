import Star from "./Star"
import {reviews} from "./Data"
import { useState, useRef, forwardRef, useEffect } from "react"
import {flushSync} from 'react-dom'
  const Reviews = () => {
    const [index, setIndex] = useState(0);
    const reviewRef = useRef(null);

    


    const handleReviewClick = index => {
        flushSync(() => {
            setIndex(index);
        });

        reviewRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        })

    }

   
    return(
        <section className="section reviews">
            <div className="container">
                <h2 className="section_header">
                    Good Reviews By Customers
                </h2>
                <p className="section_detail">
                    At vero eos et accusamus et iusto odio dignissimos 
                    ducimus qui blanditiis praesentium voluptatum 
                    deleniti atque corrupti quos dolores
                </p>
                 <div className="review_box" >
                    <div className="review_cards" >
                        {reviews.map( review => <ReviewCard key={review.id} review={review} ref={index === review.id ? reviewRef : null }   />)}
                    </div>
                 </div>

                 <div className="boxes">
                    <Circle isActive={index === 0} handleClick={() => handleReviewClick(0)} />
                    <Circle isActive={index === 1} handleClick={() => handleReviewClick(1)} />
                    <Circle isActive={index === 2} handleClick={() => handleReviewClick(2)} />
                    <Circle isActive={index === 3} handleClick={() => handleReviewClick(3)} />
                    <Circle isActive={index === 4} handleClick={() => handleReviewClick(4)}/>
                </div>
                
            </div>

            
        </section>
    )
}

const ReviewCard = forwardRef(
    (props, ref) => {
    
        return(
            <div className="review_card"  ref={ref} >
                <img src={props.review.img} alt="" className="review_img" />
                <div className="rev_info">
                    <div className="stars">
                        {Array.from('Stars').map( star => <Star  key={star}/>)}
                    </div>
                    <p className="col_detail review_detail">
                        {props.review.info}
                    </p>
                    <h3 className="customer_name">{props.review.customer_name}</h3>
                    <p className="review_detail c_position">{props.review.customer_position}</p>
                </div>
            </div>
        )
    }
)  

const Circle = ({isActive, handleClick}) => {
  return  <div className={isActive ? 'box active_box' : 'box'} onClick={handleClick}></div>

}
    
    



export default Reviews