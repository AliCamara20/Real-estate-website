import { useState } from "react"
import { blogData } from "./Data"
import calendarIcon from './assets/date.svg'
const BlogPosts = () => {
    const[posts, setPosts] = useState(blogData);
    
     const recent_posts = posts.map(post => <Post key={post.id} post={post} />)

    return(
        <div className="blog_posts blog_categories">
            <h3 className="blog_posts_header blog_categories_header">Recent Posts</h3>
            <div className="recent_posts">
                {recent_posts}
            </div>
        </div>
    )
}

const Post = ({post}) => {
    return(
        <div className="blog_post">
            <img src={post.blog_img} alt="" className="post_img" />
            <div className="post_desc">
                <p className="post_title">{post.title}</p>
                <p className="published_date posted_date">
                    <img src={calendarIcon} alt="" className="calendar_icon" />
                    <span className="post_date">{post.published_at}</span>
                </p>
            </div>
        </div>
    )
}

export default BlogPosts