import photo1 from './assets/g1_p1.jpg'
import MidSection from './MidSection'
import CardHeader from './CardHeader'
import PropertyLocation from './PropertyLocation'
import leftArrow from './assets/left_btn_arrow.svg'
import rightArrow from './assets/right_btn_arrow.svg'
import { useState } from 'react'
import {places as initialPlaces } from './Data'
const Gallery = () => {
    const [places, setPlaces]  = useState(initialPlaces);

    const place = places.map( place =>{
        return(
            <Card cardImages={place.gallery} key={place.id} >
                <CardHeader  name={place.name} price={place.price}/>
                <MidSection numOfBeds={place.info.numOfBeds} 
                    numOfBath={place.info.numOfBaths}
                    sqft={place.info.sqft}
                />
                <hr />
                <PropertyLocation placeId={place.id}/>
            </Card >
        )
    })
    return(
        <section className="section gallery">
            <div className="container">
                <h2 className="section_header">Explore Good Places</h2>
                <p className="section_detail">
                    At vero eos et accusamus et iusto odio dignissimos 
                    ducimus qui blanditiis praesentium voluptatum 
                    deleniti atque corrupti quos dolores
                </p>

                <div className="cards">
                    {place}
                </div>
            </div>    
        </section>

    )
}

export const Card = ({children, cardImages}) => {
    const[index, setIndex] = useState(0);
     const currenIndex = (index + 1) % cardImages.length;
     const currentImage = cardImages[currenIndex];

    if( index < 1) setIndex(cardImages.length);
    
    return(
        <div className="card">
            <div className="stacked">
                <img src={currentImage} alt="" className="card_img" />
                <div className="btns row_section" >
                    <button className='btn left_btn' onClick={ () => setIndex( index => index  - 1) }>
                        <img src={leftArrow} alt="" className="btn_arrow" />
                    </button>
                    <button className='btn right_btn' onClick={ () => setIndex( index => index  + 1) }>
                    <img src={rightArrow} alt="" className="btn_arrow" />

                    </button>
                    
                </div>
            </div>
            <div className="card_desc">
                {children}
            </div>
        </div>
    )
    
}

export default Gallery