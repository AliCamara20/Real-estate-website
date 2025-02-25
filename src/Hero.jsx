import { useState } from "react"
import Dropdown from "./Dropdown"
import { dropdownContent } from "./DropdownContent"
import { typeOfProperty, propertyLocations, filterItems  } from "./Data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const initialQueries = {
    propertyQuery : '',
    propertiesQuery : '',
    locationsQuery: ''
}

const Hero = () => {
    const [properties, setProperties] = useState(typeOfProperty)
    const [locations, setLocations] = useState(propertyLocations);
    const [queries, setQueries] = useState(initialQueries);
    const propertiesResults = filterItems(properties, queries.propertiesQuery);
    const locationsResults = filterItems(locations, queries.locationsQuery);
    
    return(
        <section className="hero">
            <div className="hero_text">
                <div className="container">
                    <h1 className="hero_title">
                        Find Accessible Homes for Rent
                    </h1>
                    <form action="" className="hero_form row">
                            <div className="dropdown_inputField">
                                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="xl" className="form_icon" />
                                <input type="text" className="dropdown_input"  value={queries.propertyQuery} onChange={e => setQueries({...queries, propertyQuery: e.target.value})}/>
                            </div>
                            <Dropdown
                                query={queries.propertiesQuery}   
                                dropdownContents={dropdownContent(propertiesResults)}
                                onHandleChange={ e => setQueries({...queries, propertiesQuery: e.target.value  })}   
                            >
                                <FontAwesomeIcon icon="fa-solid fa-briefcase" size="xl" className="form_icon" />
                            </Dropdown>

                            <Dropdown
                                query={queries.locationsQuery}   
                                dropdownContents={dropdownContent(locationsResults)}
                                onHandleChange={ e => setQueries({...queries, locationsQuery: e.target.value  })}
                            >
                                <FontAwesomeIcon icon="fa-solid fa-location-dot" size="xl" className="form_icon" />

                            </Dropdown>
                        <button className="hero_search_btn">Search</button>
                    </form>
                </div>   
            </div>
        </section>
    )
}

export default Hero