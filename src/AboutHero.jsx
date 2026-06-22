import hero from './assets/about_hero-pic.png'
const AboutHero = () => {
    return(
        <section className="about_hero section">
            <div className="container row">
                <img  src={hero} alt="" className="about_hero-img skeleton" />
                <div className="about_hero-text">
                    <h2 className="about_hero-text__header">Our Story</h2>
                    <div className="about_hero-text__details">
                        <p className="about_hero-text__detail">
                            Resido is a trusted real estate company dedicated to helping 
                            people buy, sell, and rent properties with ease and confidence. 
                            We focus on creating smooth, transparent, and stress-free 
                            property experiences by connecting clients with the right homes, 
                            opportunities, and professional guidance every step of the way.
                        </p>
                        <p className="about_hero-text__detail">
                            Founded by a team of experienced real estate professionals, 
                            Resido was built on the values of integrity, reliability, and customer 
                            satisfaction. Over time, we have grown into a platform that connects 
                            people to homes and investment opportunities that truly match their needs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
    
}

export default AboutHero