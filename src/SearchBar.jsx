import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import searchIcon from './assets/s_icon.svg'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const SearchBar = () => {
    return(
        <div className="search_box">
            <form action="" className="search_bar">
                <input type="search" className="search_input" placeholder="Search" />
                <button className="search_button">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
        </div>
    )
}

export default SearchBar