import BlogCategories from "./BlogCategories"
import BlogPosts from "./BlogPosts"
import SearchBar from "./SearchBar"
import Tags from "./Tags"
const BlogsSidebar = () => {
    return(
        <div className="blogs_sidebar">
            <SearchBar />
            <BlogCategories />
            <BlogPosts />
            <Tags />
        </div>
    )
}

export default BlogsSidebar