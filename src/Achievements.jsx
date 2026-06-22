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
                    Over the years, we have successfully helped countless clients find their ideal
                    properties while building a reputation for trust, excellence, and customer satisfaction. 
                    Our commitment to quality service, innovative solutions, and lasting client relationships 
                    continues to drive our growth and success in the real estate industry.
                </p>
                <div className="columns row">
                    <Column colImg={completedProperty} 
                        numOfAchievements={'20500+'}
                        detail={'Completed Properties'}
                    >
                    </Column>

                    <Column colImg={property_sales} 
                        numOfAchievements={'7600+'}
                        detail={'Property Sales'}
                    >
                    </Column>

                    <Column colImg={rented_appartments} 
                        numOfAchievements={'12300+'}
                        detail={'Apartment Rents'}
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
            <img src={colImg} alt="" className="col_img skeleton" />
            <h2 className="col_num">{numOfAchievements}</h2>
            <p className="col_detail">{detail}</p>
        </div>
    )
    
    
}

export default Achievements