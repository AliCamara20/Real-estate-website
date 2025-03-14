import { Link } from "react-router-dom"
const links = [
    {id: 0, name: 'Home',  path: '/'}, 
    { id: 1, name: 'About', path: '/about'}, 
    {id: 2, name: 'Blogs', path: '/blogs'}, 
    {id: 3, name: 'Contact', path: '/contact'}
]
const NavLinks = ({onVisible}) => {
    return links.map( link => <li className="nav_item" key={link.id}><Link to={link.path} className="nav_link" onClick={() => onVisible(false)}>{link.name}</Link></li> )
}

export default NavLinks