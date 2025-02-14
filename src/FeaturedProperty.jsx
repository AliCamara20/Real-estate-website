import { places } from "./Data"
const Featuredplaces = () => {
    return(
        <div className="featured_places">
            <h3 className="featured_prop_header">Featured Property</h3>
            <FeaturedProperty 
                f_img={places[0].gallery[0]}
                p_name={'Westerchester Village'}
                prop_status={'Buy'}
                  
            />
            <FeaturedProperty 
                f_img={places[0].gallery[1]} 
                p_name={'The Ridge Of St. Joseph Apartments'}
                prop_status={'Rent'} 
                
            />
            <FeaturedProperty 
                f_img={places[0].gallery[2]} 
                p_name={'Cottonwood Creek Apartments'} 
                prop_status={'Rent'}
            />
            <FeaturedProperty 
                f_img={places[0].gallery[3]}
                p_name={'Mitchell Park Plaza Apartments'}
                prop_status={'Rent'}
            />
            <FeaturedProperty 
                f_img={places[0].gallery[4]}  
                p_name={'American Electric Lofts Apartments'}
                prop_status={'Buy'}
            />
        </div>
    )
}

const FeaturedProperty = ({f_img, p_name, prop_status}) => {
    return(
        <div className="featured">
            <img src={f_img} alt="" className="featured_prop_img" />
            <div className="featured_prop_detail">
                <h5 className="featured_prop_name">{p_name}</h5>
                <p className="featured_prop_date">July 24, 2022</p>
                <p className="location_detail">
                    <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#5f6368"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
                    <span className="address">3599 Huntz Lane</span>
                </p>
                <button className="featured_prop_status">{prop_status}</button>
            </div>
        </div>
    )
}

export default Featuredplaces