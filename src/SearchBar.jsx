import searchIcon from './assets/s_icon.svg'
const SearchBar = () => {
    return(
        <div className="search_box">
            <form action="" className="search_bar">
                <input type="search" className="search_input" placeholder="Search" />
                <button className="search_button">
                    <img src={searchIcon} alt="" className="search_btn_img" />
                </button>
            </form>
        </div>
    )
}

export default SearchBar