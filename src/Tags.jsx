import { tags } from "./Data"
import TagBoxes from "./TagBoxes"
const Tags = () => {
    const popular_tags = tags.map( tag => <p className="tag" key={tag} >{tag}</p>)
    return(
        <div className="tags blog_categories">
            <h3 className="tags_header blog_categories_header">Tags</h3>
             <TagBoxes />
            
        </div>
    )
}

export default Tags