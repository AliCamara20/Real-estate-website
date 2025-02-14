const Packages = () => {
    return(
        <section className="section packages">
            <div className="container">
                <h2 className="section_header">See Our Packages</h2>
                <p className="section_detail">
                    At vero eos et accusamus et iusto odio dignissimos ducimus 
                    qui blanditiis praesentium voluptatum deleniti atque 
                    corrupti quos dolores
                </p>
                <div className="package_cards cards">
                <Package package_price={199} package_type={'Standard package'} num_of_listing={50} extension={'standard'} />
                <Package package_price={99} package_type={'Platinum package'} num_of_listing={30} extension={'platinum'} />
                <Package package_price={49} package_type={'Basic package'} num_of_listing={15} extension={'basic'} />
                </div>
            </div>
        </section>
    )
}

const Package = ({package_price, package_type, num_of_listing, extension}) => {
    return(
        <div className="package">
            <div className={'package_header ' + extension}>
                <div className="p_price">
                    <h3 className="dollar_sign">$</h3>
                    <h2 className="package_price">{package_price}</h2>
                </div>
                <h5 className="package_type">{package_type}</h5>    
            </div>
            <ul className="package_list">
                <li className="package_item">
                   <p className="item_detail">{num_of_listing} Listings</p>
                   <span className="checked_icon">✔</span>
                </li>
                <li className="package_item">
                    <p className="item_detail">Contact With agent</p>
                    <span className="checked_icon">✔</span>
                </li>
                <li className="package_item">
                    <p className="item_detail">One year validity</p>
                    <span className="checked_icon">✔</span>
                </li>
                <li className="package_item">
                    <p className="item_detail">7 X 24 Fully support</p>
                    <span className="checked_icon">✔</span>
                </li>
            </ul>
            <CallToActionButton label={'Choose Plan'} />
              
        </div>
    )
}

export const CallToActionButton = (props) => {
    return <button className="plan_btn" {...props}>{props.label}</button>
}

export default Packages

