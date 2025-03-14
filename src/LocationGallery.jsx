import dunao_img from './assets/dunao.png';
import sf_img_img from './assets/san_francisco.png';
import lp_img from './assets/Liverpool.png';
import queens_img from './assets/queens.png';
import newO_img from './assets/new_orleans.png';
import bk_img from './assets/brooklyn.png';
import { Link } from 'react-router-dom';
import { CallToActionButton } from './Packages';
const LocationGallery = () => {
    return(
            <section className="section gallery location_gallery" style={{background: 'transparent'}}>
                    <div className="container">
                    <h2 className="section_header">Find by Location</h2>
                    <p className="section_detail">
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti 
                        atque corrupti quos dolores.
                    </p>
                    <div className="cards location_cards">
                        <Card cardImg={sf_img_img} l_name={'San Francisco, California'} properties={'1 property'} />
                        <Card cardImg={dunao_img} l_name={'Dunao, California'} properties={'2 properties'} />
                        <Card cardImg={lp_img} l_name={'Liverpoool, California'} properties={'1 property'}/>
                        <Card cardImg={newO_img} l_name={'New Orleans, Louisiana'} properties={'1 property'}/>
                        <Card cardImg={queens_img} l_name={'Queens, New York'} properties={'1 property'}/>
                        <Card cardImg={bk_img} l_name={'Brooklyn, New York'} properties={'3 properties'}/>
                    </div>   
                    <CallToActionButton label = {'Explore More Location'} />
                </div>
                
            </section>
        
    )
    
}


const Card = ({cardImg, l_name, properties}) => {
    return(
        <div className="location_card" >
            <img src={cardImg} alt="" className="location_card_img" />
            <div className="location_card_desc  row_section">
                <div className="col_1">
                    <h4 className="location_name">{l_name}</h4>
                    <p className="prop_detail col_detail">{properties}</p>
                </div>
                <Link to={`properties/${l_name}`}  className="see_more">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
                </Link>
                
            </div>
        </div>
    )
    
    

}

export default LocationGallery