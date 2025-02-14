import { blogData } from "./Data"
import calendarIcon from './assets/date.svg'
import commentsIcon from './assets/comments.svg'
import { useState } from "react"
const BlogsContainer = () => {
    const [data, setData] = useState(blogData);
    const blogInfo = data.map( d => <Blog blog={d} key={d.id} />)
    return(
        <div className="blogs_container">
            {blogInfo}
        </div>
    )
}


const Blog = ({blog}) => {
    return(
        <div className="blog_card">
            <a href="" className="blog_img_link">
                <img src={blog.blog_img} alt="" className="blog_img" />
            </a>
            <div className="blog_desc">
                    <div className="published_date__comments">
                        <p className="published_date">
                            <img src={calendarIcon} alt="" className="calendar_icon" />
                            <span className="pub_date">{blog.published_at}</span>
                        </p>
                        <p className="comments">
                            <img src={commentsIcon} alt="" className="calendar_icon" />
                            <span className="pub_date">{blog.comments} Comments</span>
                        </p>
                    </div>  
                    <h1 className="blog_title">{blog.title}</h1>
                    <p className="blog_detail">{blog.detail}</p>
                    <a href="" className="continue_link">Continue ➡</a>

                </div>
        </div>
    )
}

export default BlogsContainer




