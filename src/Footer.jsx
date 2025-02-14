import logo from './assets/resido_logo.svg';
import play_storeIcon from './assets/play_store.svg'
import app_storeIcon from './assets/app_store.svg'
import SocialMediaLinks from './SocialMediaLinks';

const Footer = () => {
    return(
        <>  
            <footer className="section">
                <div className="container">
                    <div className="footer_columns cards">
                        <Column>
                            <h5 className="footer_col_header">
                                <img src={logo} alt="" className='footer_logo' />          
                            </h5>
                            <p className="footer_pg">Collins Street West, Victoria 8007, Australia.</p>
                            <p className="footer_pg">+1 246-345-0695</p>
                            <p className="footer_pg">info@example.com</p>
                        </Column>
                    
                        <Column >
                            <h5 className="footer_col_header">Navigations</h5>
                            <p className="footer_pg"><a href="" className="footer_link">About Us</a></p>
                            <p className="footer_pg"><a href="" className="footer_link">FAQS</a></p>
                            <p className="footer_pg"><a href="" className="footer_link">Contacts</a></p>
                            <p className="footer_pg"><a href="" className="footer_link">Blogs</a></p>
                        </Column>
                    
                        <Column>
                            <h5 className="footer_col_header">The Highlights</h5>
                            <p className="footer_pg"><a href="" className="footer_link">Appartments</a></p>
                            <p className="footer_pg"><a href="" className="footer_link">My House</a></p>
                            <p className="footer_pg"><a href="" className="footer_link">Condos</a></p>
                            <p className="footer_pg"><a href="" className="footer_link">Villas</a></p>
                        </Column>
                        <Column >
                            <h5 className="footer_col_header">Agents & Agency</h5>
                            <p className="footer_pg"><a href="" className="footer_link">Agent List</a></p>
                            <p className="footer_pg"><a href="" className="footer_link">Agent Details</a></p>
                            <p className="footer_pg"><a href="" className="footer_link">Agent List</a></p>
                            <p className="footer_pg"><a href="" className="footer_link">Agent Details</a></p>
                        </Column>

                        <Column>
                            <h5 className="footer_col_header">Download Apps</h5>
                            <DownloadBox icon={play_storeIcon} label={'Play store'}/>       
                            <DownloadBox icon={app_storeIcon} label={'App store'}/>       
                        </Column>
                    </div>  
                </div>
            </footer>
            <div className="copyrights__sm_links row ">
                <div className="container row">
                <p className="footer_pg">&copy;2024 Resido. All rights reserved by SmartDataSoft.</p>
                <SocialMediaLinks />
                </div>
                
                
            </div> 
        </>
        
    )
}


const Column = ({children}) => {
    return(
        <div className="footer_column">{children}</div>
    ) 
}

const DownloadBox = ({icon, label}) => {
    return(
        <div className="download_box">
            <img src={icon} alt="" className="dowload_icon" />
            <div className="store_info">
                <h4 className="store_name">{label}</h4>
                <p className="ctl footer_pg">Get it now</p>
            </div>
        </div>
    )
    
}

export default Footer