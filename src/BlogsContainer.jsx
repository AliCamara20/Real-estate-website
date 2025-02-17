import { blogData } from "./Data"
import calendarIcon from './assets/date.svg'
import commentsIcon from './assets/comments.svg'
import { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const BlogsContainer = () => {
    const [data, setData] = useState(blogData);
    const blogInfo = data.map( d => <Blog blog={d} key={d.id} />)
    return(
        <>
        <div className="blogs_container">
            {blogInfo}
            <Outlet />

        </div>
        </>
        
    )
}


const Blog = ({blog}) => {
    const navigate = useNavigate();
    
    return(
        <div className="blog_card">
            <Link to={`${blog.id}`} className="blog_img_link">
                <img src={blog.blog_img} alt="" className="blog_img" />
            </Link>
            <div className="blog_desc">   
                <p className="published_date">{blog.published_at}</p>
                <h3 className="blog_title">{blog.title}</h3>
                <p className="blog_detail">{blog.detail}</p>
                <Link to={`${blog.id}`} className="continue_link" >Continue ➡</Link>
            </div>
        </div>
    )
}

export default BlogsContainer




