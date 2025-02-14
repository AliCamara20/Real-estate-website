import AboutHero from "./AboutHero"
import Agents from "./Agents"
import MissionStatement from "./MissionStatement"

const About = () =>{
    return(
        <section className="about_us property_list">
            <div className="prop_list_header">
                <div className="container">
                <div className="header_info">
                    <p className="header_info_title">About Us</p>
                    <p className="header_info_desc">Who we are & our mission</p>
                </div>
                </div>
            </div>
            <AboutHero />
            <Agents />
            <MissionStatement />
            
        </section>
    )
    
    
    
} 

export default About