import SocialMediaLinks from "./SocialMediaLinks"
import adam from './assets/Adam_walcorn.jpg'
import grag from './assets/Grack_chappel.jpg'
import james from './assets/james_n_green.jpg'
import jasmine from './assets/jasmine_khatri.jpg'
import nikita from './assets/Nikita_rajaswi.jpg'
import rudra from './assets/Rudra_k_mathan.jpg'
import seema from './assets/Seema_gauranki.jpg'
import niha from './assets/niharika_muthurk.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import {Carousel} from 'react-responsive-carousel'
import React from "react"
const Agents = () => {
    return(
        <section className="section agents">
            <div className="container">
                <h2 className="section_header">Meet Our Team</h2>
                <p className="mission_info agents_section_info">Professional & Dedicated Team</p>
                <Container />
                
            </div>
            
        </section>
    )
   
}


const Container = () => {
    
    return(
        <div className="agents_container">
            <div className="agents_grid" >
                <Agent name={'Adam Walcorn'} image={adam} />
                <Agent name={'Seema Gauranki'} image={seema} />
                <Agent name={'Grack Chappel'} image={grag} />
                <Agent name={'Nikita Rajaswi'} image={nikita} />
            </div>  
            <div className="agents_grid">
                <Agent name={'James N. Green'} image={james} />
                <Agent name={'Jasmine Khatri'} image={jasmine} />
                <Agent name={'Rudra K. Mathan'} image={rudra} />
                <Agent name={'Niharika Muthurk'} image={niha} />
            </div>     
        </div>
    )
    
}

const Agent = ({name, image}) => {
    return(
        <div className="agent_card">
            <img src={image} alt="" className="agent_img" />
            <h3 className="agent_name">{name}</h3>
            <p className="agent_occupation">Agent</p>
            <SocialMediaLinks />
        </div>
    )
    

}


const Thumb = ({isSelected}) => {
   return <span className={ isSelected ? 'crsl_ind active_ind' : 'crsl_ind'}></span>
}

export default Agents