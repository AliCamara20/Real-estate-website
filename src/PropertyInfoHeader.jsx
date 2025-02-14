import SortPanel from "./SortPanel"
const orders = ['Latest', 'Oldest', 'Title Ascending', 
    'Title Descending', 'Most Rated', 'Most Viewed']
const PropertyHeader = () => {
    return(
        <div className="p_header row" style={{width: '100%'}}>
            <h2 className="num_of_results">Showing 1 of 1 Results</h2>
            <div className="property_info_header_right_col row">
                <div className="sort_panel">
                    <SortPanel>
                        <ul className="order_list panel_list">
                            {orders.map( order => <Order key={order} order={order} />)}
                        </ul>
                    </SortPanel>
                </div>
            </div>
        </div>
    )
    
}

const Order = ({order}) => {
    return(
        <li className="order_item">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M400-280v-400l200 200-200 200Z"/></svg>
            <span className="order_name">{order}</span>
        </li>
    )
}

export default PropertyHeader