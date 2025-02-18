const BlogComment = ({comment_img, comment_name, comment_date, children}) => {
    return(
        <div className="selected_blog_comment">
            <img src={comment_img} alt="" className="selected_blog_commment_img" />
            <div className="comment_info">
                <div className="blog_comment_header">
                <h3 className="comment_name blogger_name">{comment_name} 
                    {children}
                </h3> 
                <p className="blog_detail reply_btn">Reply</p>
                </div>
                
                <p className="comment_date">{comment_date}</p> 
                <p className="blog_detail comment_detail">
                    Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim 
                    laborumab.perspiciatis unde omnis iste natus 
                    erro
                </p>
            </div>
        </div>
    )
}

export default BlogComment