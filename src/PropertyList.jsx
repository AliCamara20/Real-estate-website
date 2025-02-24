import { useParams } from "react-router-dom"
import { CallToActionButton } from "./Packages";
import Panels from "./Panels";
import PropertyHeader from "./PropertyInfoHeader";
import { Card } from "./Gallery";
import { places } from "./Data";
import CardHeader from "./CardHeader";
import MidSection from "./MidSection";
import PropertyLocation from "./PropertyLocation";

const PropertyList = () => {
    const {locationName} = useParams();
    return(
        <section className="property_list">
            <div className="prop_list_header">
                <div className="container">
                    <div className="header_info">
                        <h1 className="header_info_title">Property List</h1>
                        <p className="header_info_desc">Property List in {locationName}</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="properties_container section properties_row">
                    <div className="sidebar">
                        <div className="input_field" >
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                            <input type="text" name="" id="" placeholder='Keywords'/>
                        </div>
                        <Panels />
                        <CallToActionButton label={'Search'} />
                    </div>
                    <div className="properties">
                       <PropertyHeader />
                       <div className="cards">
                            <Card  cardImages={places[0].gallery}>
                                <CardHeader  name={'Resort Valley ocs'} price={'$7,000'}/>
                                <MidSection 
                                    numOfBeds={places[0].info.numOfBeds} 
                                    numOfBath={places[0].info.numOfBaths}
                                    sqft={places[0].info.sqft}
                                />
                                <hr />
                                <PropertyLocation placeId={0}/>
                            </Card >
                            <Card cardImages={places[1].gallery}>
                                <CardHeader  name={'Bluewhale Real Estate'} price={'$5,000'}/>
                                <MidSection 
                                    numOfBeds={places[1].info.numOfBeds} 
                                    numOfBath={places[1].info.numOfBaths}
                                    sqft={places[1].info.sqft}
                                />
                                <hr />
                                <PropertyLocation placeId={1} />
                            </Card>
                       </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default PropertyList