import {useParams} from 'react-router-dom'
import { places as initialPlaces } from './Data';
import ErrorPage from './ErrorPage';
import CustomCarousel from './Carousel';
import PlaceInfo from './PlaceInfo';
import {useState } from 'react';
const Place = () => {
   const {placeId}  = useParams();
   const [places, setPlaces] = useState(initialPlaces);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('');


   if(placeId > places.length) return <ErrorPage />
   
   const selectedPlace = places.find( place => place.id === Number(placeId));

    function handleSubmitForm(e, propId) {
      e.preventDefault();
      console.log('working');
      places.map( place => {
        if(place.id === propId ){
          return{
            ...place, reviews: [...place.reviews, {name: name, email: email, message: message}]
          }
        }

        else return place
          
      })
    }

    console.log(selectedPlace.reviews)
    return(
      <section className="place">
        <CustomCarousel images={selectedPlace.gallery} />
        <PlaceInfo place={selectedPlace} handleSubmitForm={e => handleSubmitForm(e, selectedPlace.id)} name={name} email={email} message={message} onNameChange={e => setName(e.target.value)}
          onEmailChange={e => setEmail(e.target.value)} onMessageChange={e => setMessage(e.target.value)}
        />
        
      </section>
          
    )

   
}

export default Place