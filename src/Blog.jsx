import { useState } from "react"
import { blogData } from "./Data"
import { useParams } from "react-router-dom";
import BlogsSidebar from "./BlogsSidebar";
import RelatedTags from "./RelatedTags";
import SocialMediaLinks from "./SocialMediaLinks";
import Comments, { Bloggger } from "./Comments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PrevNext from "./PrevNext";
const Blog = ()=> {
    const[blogs, setBlogs] = useState(blogData);
    const {blogId} = useParams();
    const selectedBlog = blogs.find( blog => blog.id === Number(blogId));

    return(

        <section className="selected_blog_section property_list">
            <div className="prop_list_header">
                <div className="container">
                <div className="header_info">
                    <p className="header_info_title">Blog Detail</p>
                    <p className="header_info_desc">See Our Latest news</p>
                </div>
                </div>
            </div>
            <div className="container">
                <div className="selected_blog_detail place_info_container">
                    <div className="selected_blog">
                        <div className="selected_blog_info">
                            <img src={selectedBlog.blog_img} alt="" className="selected_blog_img" />
                            <div className="blog_writer__blog_comments">
                                <p className="blog_writer">by Rosaline Doe</p>
                                <p className="blog_comments">{selectedBlog.comments} Comments</p>
                            </div>
                            <h2 className="blog_title">{selectedBlog.title}</h2>
                            <p className="blog_detail">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Doloremque, recusandae rerum sint eveniet deleniti labore 
                                voluptatibus commodi autem doloribus voluptatum nesciunt 
                                quae qui eius, voluptates in dicta cumque corrupti ducimus 
                                adipisci fugiat sapiente asperiores cupiditate! Ab temporibus 
                                dolorem, aut cum expedita nulla doloribus atque dolor est 
                                officiis cupiditate quia tenetur quos? Dicta, ea quisquam 
                                sequi exercitationem error aperiam totam dolore, minima 
                                saepe reprehenderit inventore. Atque quisquam exercitationem 
                                veritatis tempore sequi doloremque recusandae. Culpa laudantium, 
                                minima a sed expedita alias optio. Rem magnam odio rerum? 
                                Ab, perferendis? Distinctio dolores doloribus ratione 
                                expedita a neque dignissimos, earum quas alias officiis 
                                laudantium libero?
                            </p>
                            <p className="blog_detail">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Nisi velit alias ipsam perferendis repellat, voluptatibus 
                                beatae accusantium, quis aperiam nihil sed porro hic quisquam, 
                                praesentium architecto officiis maiores consequatur eligendi 
                                vel corrupti consequuntur repellendus? Necessitatibus, 
                                aspernatur corporis labore laboriosam saepe quae sint 
                                asperiores quos commodi, pariatur ipsam modi dignissimos 
                                consectetur cupiditate! Unde, labore placeat! Itaque 
                                repellendus quasi iste impedit id.
                            </p>
                            <p className="blog_detail quote row">
                                <FontAwesomeIcon icon="fa-solid fa-quote-left" size="2xl" className="quotation" />
                                <span className="quote__quote">
                                    Lorem ipsum dolor sit amet, consectetur 
                                    adipisicing elit, sed do eiusmod tem ut 
                                    labore et dolore magna aliqua. Ut enim ad 
                                    minim veniam, quis nostrud ullamco laboris nisi 
                                    ut aliquip ex ea commodo onsequat.

                                    <span className="quote__author">- Rosaline Pong</span>

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
        <div className="blog_social_share">
            <FontAwesomeIcon icon="fa-brands fa-facebook-f" size='xm'   />
            <FontAwesomeIcon icon="fa-brands fa-x-twitter" size='xm' />
            <FontAwesomeIcon icon="fa-brands fa-linkedin-in" size='xm' />
            <FontAwesomeIcon icon="fa-brands fa-vk" size="xm" />
            <FontAwesomeIcon icon="fa-brands fa-tumblr" size="xm" />

        </div>
    )
}
    
export default Blog