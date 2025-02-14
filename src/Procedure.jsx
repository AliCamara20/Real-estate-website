import usersIcon from './assets/users.svg'
import mapIcon  from './assets/map.svg'
import dealIcon from './assets/deal.svg'
import { use } from 'react'
const Procedures  = () => {
    return(
        <section className="section procedures">
            <div className="container">
                <h2 className="section_header">How it works?</h2>
                <p className="section_detail">
                    At vero eos et accusamus et iusto odio dignissimos 
                    ducimus qui blanditiis praesentium voluptatum deleniti 
                    atque corrupti quos dolores.
                </p>
                <div className="procedural_cards row">
                   <Card icon={mapIcon} step={1} label={'Evaluate the property'} >
                        There are many variations of passages 
                        of Lorem Ipsum available, but the 
                        majority have Ipsum available.
                   </Card>
                   <Card icon={usersIcon} step={2} label={'Meet Your Agent'} >
                        There are many variations of passages
                        of Lorem Ipsum available, but the 
                        majority have Ipsum available.
                   </Card>
                   <Card icon={dealIcon} step={3} label={'Close The Deal'} >
                        There are many variations of passages 
                        of Lorem Ipsum available, but the 
                        majority have Ipsum available.
                   </Card>
                </div>
            </div>
        </section>
    )

}

const Card = ({label, icon, step, children}) => {
    return(
        <div className="procedural_card">
            <h3 className="step">{step}</h3>
            <img src={icon} alt="" className="proc_img" />
            <h3 className="proc_title">{label}</h3>
            <p className="proc_detail col_detail">
                {children}
            </p>
       </div>
    )
   
}

export default Procedures