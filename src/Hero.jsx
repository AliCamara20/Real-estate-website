import heroImage from './assets/r_hero.png'

const Hero = () => {
    return(
        <section className="hero">
            <img src={heroImage} alt="" className="hero_img" />
            <div className="container hero_text">
                
                    <h1 className="hero_title">
                        Find Accessible Homes for Rent
                    </h1>
                    <form action="" className="hero_form row">
                        <div className="input_field" >
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                            <input type="text" name="" id="" placeholder='Keywords'/>
                        </div>
                        <div className="input_field">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm240-600h160v-80H400v80Zm400 360H600v80H360v-80H160v160h640v-160Zm-360 0h80v-80h-80v80Zm-280-80h200v-80h240v80h200v-200H160v200Zm320 40Z"/></svg>
                            <select name="" id="">
                                <option value="">Select Category</option>
                                <option value="">Apartment</option>
                                <option value="">Condos</option>
                                <option value="">Denver</option>
                                <option value="">House</option>
                                <option value="">Offices</option>
                                <option value="">Rental</option>
                                <option value="">Studio</option>
                                <option value="">Villas</option>
                            </select>
                        </div>
                        <div className="input_field">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
                        <div className="location">
                            <input type="text" placeholder='All cities' />
                            <ul style={{margin: 0, padding: 0, listStyle: 'none', display: 'none'}}>
                                <li className="list_items">Queens, New York</li>
                                <li className="list_items">Queens, New York</li>
                                <li className="list_items">Queens, New York</li>
                                <li className="list_items">Queens, New York</li>
                                <li className="list_items">Queens, New York</li>
                                <li className="list_items">Queens, New York</li>
                                <li className="list_items">Queens, New York</li>
                            </ul>
                        </div>
                        </div>
                        <button className='search_btn'>Search</button>
                    </form>
                
            </div>
        </section>
    )
}

export default Hero