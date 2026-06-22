const CardHeader = ({property}) => {
    return(
        <div className="top_section row_section">
            <div className="left">
                <p className="col_detail prop_status">{property.category}</p>
                <h4 className="estate_name">{property.name}</h4>
            </div>
            <h3 className="prop_price">${property.price}</h3>                   
        </div>
    )
    
}

export default CardHeader