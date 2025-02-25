import {MapContainer, TileLayer} from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import FixMapSize from './FixedMapSize'
import { useState,  useEffect } from 'react'


const LocationMap = () => {

    
  
    return(
        <div id='map'>
            <MapContainer center={[13.4549, -16.5790]} zoom={13} >
                <TileLayer  
                    attribution= '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

            </MapContainer>

        </div>
    )    
}

export default LocationMap