import completedProperty from './assets/completed_property.png'
import rented_appartments from './assets/app_rent.png'
import property_sales from './assets/property_sales.png'
import happy_clients from './assets/happy_clients.png'


const Achievements = () => {
    return(
        <section className=" section achievements">
            <div className="container">
                <h2 className="section_header">Achievements</h2>
                <p className="section_detail">
                    At vero eos et accusamus et iusto odio dignissimos 
                    ducimus qui blanditiis praesentium voluptatum deleniti 
                    atque corrupti quos dolores.
                </p>
                <div className="columns row">
                    <Column colImg={completedProperty} 
                        numOfAchievements={'20500+'}
                        detail={'Completed Property'}
                    >
                    </Column>

                    <Column colImg={property_sales} 
                        numOfAchievements={'7600+'}
                        detail={'Property Sales'}
                    >
                    </Column>

                    <Column colImg={rented_appartments} 
                        numOfAchievements={'12300+'}
                        detail={'Apartment Rent'}
                    >
                    </Column>

                    <Column colImg={happy_clients} 
                        numOfAchievements={'15200+'}
                        detail={'Happy Clients'}
                    >
                    </Column>
                </div>
            </div>
            
        </section>
    )
}

const Column = ({colImg, numOfAchievements, detail}) => {
    return(
        <div className="col">
            <img src={colImg} alt="" className="col_img" />
            <h2 className="col_num">{numOfAchievements}</h2>
            <p className="col_detail">{detail}</p>
        </div>
    )
    
    
}

export default Achievements