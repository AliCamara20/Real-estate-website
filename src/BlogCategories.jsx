import { categories } from "./Data"
const BlogCategories = () => {
    const blog_categories = categories.map(category =>{
        return (
            <li className="category_item " key={category.id}>
                <p className="category_name">{category.category}</p>
                <span className="category_count">({category.count})</span>
            </li>
        )
    }  )
    return(
        <div className="blog_categories">
            <h3 className="blog_categories_header ">Categories</h3>

            <ul className="categories_list">
                {blog_categories}
            </ul>
        </div>
    )
    
}

export default BlogCategories