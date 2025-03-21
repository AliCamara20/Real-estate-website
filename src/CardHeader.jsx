const CardHeader = ({name, price}) => {
    return(
        <div className="top_section row_section">
            <div className="left">
                <p className="col_detail prop_status">Sale</p>
                <h4 className="estate_name">{name}</h4>
            </div>
            <h3 className="prop_price">${price}</h3>                   
        </div>
    )
    
}

export default CardHeader