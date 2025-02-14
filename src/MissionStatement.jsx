import hero from './assets/mission_pic.png'
import WorkProcesses from './WorkProcesses'

const MissionStatement = () => {
    return(
        <section className="mission_statement section">
            <h2 className="section_header">Our Mission & Work Process</h2>
            <p className="mission_info">Professional & Dedicated Team</p>
            <div className="container row">
                <WorkProcesses />
                <img  src={hero} alt="" className="about_hero-img mission_statement__img" />

            </div>
        </section>
    )
}



export default MissionStatement