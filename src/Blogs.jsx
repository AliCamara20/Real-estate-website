import BlogsContainer from "./BlogsContainer"
import BlogsSidebar from "./BlogsSidebar"

const Blogs = () =>{
   return(
      <section className="blogs property_list">
         <div className="prop_list_header blog_header">
            <div className="container">
               <div className="header_info">
                  <h1 className="header_info_title">Our Articles</h1>
                  <p className="header_info_desc">See Our Latest Articles & News</p>
               </div>
            </div>
         </div>

         <div className="blog_items section">
            <div className="container">
               <div className="blog_items_header">
                  <h2 className="blog_items_header_title">Latest News</h2>
                  <p className="blog_items_header_desc">We post regulary most powerful articles for help and support.</p>
               </div>
               <div className="blog_container__blog_sidebar row">
                  <BlogsContainer />
                  
               </div>
               
            </div>
         </div>
      </section>
      
   )
} 
export default Blogs