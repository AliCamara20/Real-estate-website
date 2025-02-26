import { useContext } from "react"
import { LocationContext } from "./CategoryContext"
export const DropdownContent = (contents, onQuery) => {
    const locationContext = useContext(LocationContext)
    return(
        contents.length > 0 ?  contents.map( (content, cIndex) =>
            <span 
                className="dropdown_content__content" 
                key={cIndex}
                onClick={ () => onQuery(content)}
            >
                {content}
            </span>
    )  : <span className="dropdown_content__content" >No option</span>
    ) 
}