import { Link } from "react-router-dom"
const links = [
    {id: 0, name: 'About Us',  path: '/about'}, 
    { id: 1, name: 'FAQS', path: '/faqs'}, 
    {id: 2, name: 'Blogs', path: '/blogs'}, 
    {id: 3, name: 'Contact', path: '/contact'}
]

const FooterLinks = ({ onVisible}) => {
    return links.map( link => <p className="footer_pg" key={link.id} >
        <Link  to = {link.path} className="footer_link" onClick={() => onVisible(false)}>{link.name}</Link>
    </p>)
}

export default FooterLinks