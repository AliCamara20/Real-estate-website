const propertyTypes = ['Appartment', 'Condos', 'Denver', 'House', 'Offices',
    'Rental', 'Studios', 'Villas'

]

const PropertyTypes = () => {

    const panelItems   = propertyTypes.map( (location, index) => {
        return(
            <li className="panel_item accordion_row">
                <label htmlFor={`panel${index + 1}`} className="estate_location" >
                    {location}
                </label>
                <input type="checkbox" name="" id={`panel${index + 1}`} className="checkbox" onChange={e => e.stopPropagation()} />

                <label className="custom_checkbox" htmlFor={`panel${index + 1}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                </label>
            </li>
        )
    })

    return(
        <ul className="panel_list">
            {panelItems}
        </ul>
    )
}

export default PropertyTypes