import { useState } from "react"
import { blogData } from "./Data"
import { useParams } from "react-router-dom";
import BlogsSidebar from "./BlogsSidebar";
import RelatedTags from "./RelatedTags";
import SocialMediaLinks from "./SocialMediaLinks";
import Comments, { Bloggger } from "./Comments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PrevNext from "./PrevNext";
import useScrollToTop from "./ScrollToTop";
const Blog = ()=> {
    const[blogs, setBlogs] = useState(blogData);
    const {blogId} = useParams();
    const selectedBlog = blogs.find( blog => blog.id === Number(blogId));
    useScrollToTop();
    return(

        <section className="selected_blog_section property_list">
            <div className="prop_list_header">
                <div className="container">
                <div className="header_info">
                    <h1 className="header_info_title">Blog Detail</h1>
                    <p className="header_info_desc">See Our Latest news</p>
                </div>
                </div>
            </div>
            <div className="container">
                <div className="selected_blog_detail place_info_container">
                    <div className="selected_blog">
                        <div className="selected_blog_info">
                            <img src={selectedBlog.blog_img} alt="" className="selected_blog_img skeleton" />
                            <div className="blog_writer__blog_comments">
                                <p className="blog_writer">{selectedBlog.commentor}</p>
                                <p className="blog_comments">{selectedBlog.comments} Comments</p>
                            </div>
                            <h2 className="blog_title">{selectedBlog.title}</h2>
                            <p className="blog_detail">{selectedBlog.info}</p>
                            <p className="blog_detail">{selectedBlog.info2}</p>
                            <p className="blog_detail quote row">
                                <FontAwesomeIcon icon="fa-solid fa-quote-left" size="2xl" className="quotation" />
                                <span className="quote__quote">
                                    {selectedBlog.hotComment}
                                <span className="quote__author">- {selectedBlog.commentor}</span>

                                </span>
                            </p>
                            <div className="related_tags__sm_links_row row">
                                <div className="related_tags">
                                    <h4>Related Tags</h4>
                                    <RelatedTags />
                                </div>
                                <div className="selected_blog_sm_links">
                                    <h4>Social Share</h4> 
                                      <SocialShare />        
                                </div>
                            </div>
                            <hr className="seperator" />
                                <PrevNext />
                        </div>
                        <Bloggger />
                        <Comments />
                    </div>
                    
                    <BlogsSidebar />
                </div>
            </div>
            
        </section>
        
        
        
    )
}

const SocialShare = () => {
    return(
        <div className="blog_social_share blogger_socail_share">
            <FontAwesomeIcon icon="fa-brands fa-facebook-f" size='xm'   />
            <FontAwesomeIcon icon="fa-brands fa-x-twitter" size='xm' />
            <FontAwesomeIcon icon="fa-brands fa-linkedin-in" size='xm' />
            <FontAwesomeIcon icon="fa-brands fa-vk" size="xm" />
            <FontAwesomeIcon icon="fa-brands fa-tumblr" size="xm" />

        </div>
    )
}
    
export default Blog