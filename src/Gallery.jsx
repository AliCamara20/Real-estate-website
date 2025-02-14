import photo1 from './assets/g1_p1.jpg'
import MidSection from './MidSection'
import CardHeader from './CardHeader'
import PropertyLocation from './PropertyLocation'
import { useState } from 'react'
import {places as initialPlaces } from './Data'
const Gallery = () => {
    const [places, setPlaces]  = useState(initialPlaces);

    const place = places.map( place =>{
        return(
            <Card cardImages={place.gallery} >
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
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
                    </button>
                    <button className='btn right_btn' onClick={ () => setIndex( index => index  + 1) }>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
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