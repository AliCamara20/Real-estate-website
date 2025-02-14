import hero from './assets/about_hero-pic.png'
const AboutHero = () => {
    return(
        <section className="about_hero section">
            <div className="container row">
                <img  src={hero} alt="" className="about_hero-img" />
                <div className="about_hero-text">
                    <h2 className="about_hero-text__header">Our Story</h2>
                    <div className="about_hero-text__details">
                        <p className="about_hero-text__detail">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea 
                            commodo consequat.
                        </p>
                        <p className="about_hero-text__detail">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
    
}

export default AboutHero