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
                    Our simple three-step process makes buying, selling, or renting property 
                    easy. From evaluating the property to connecting with an agent and 
                    closing the deal, we guide you every step of the way.
                </p>
                <div className="procedural_cards row">
                   <Card icon={mapIcon} step={1} label={'Evaluate the property'} >
                        We carefully assess the property's value, condition, 
                        and market potential to determine the best opportunities available.
                   </Card>
                   <Card icon={usersIcon} step={2} label={'Meet Your Agent'} >
                        Connect with our professional agents who provide guidance, 
                        answer questions, and support your property journey.
                   </Card>
                   <Card icon={dealIcon} step={3} label={'Close The Deal'} >
                        Complete the transaction smoothly with expert assistance, 
                        ensuring a secure and successful property transfer.
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