import { useContext } from "react"
import { LocationContext } from "./CategoryContext"
export const DropdownContent = (contents) => {
    const locationContext = useContext(LocationContext)
    return(
        contents.length > 0 ?  contents.map( (content, cIndex) =>
            <span 
                className="dropdown_content__content" 
                key={cIndex}
                onClick={() => locationContext(content)}
            >
                {content}
            </span>
    )  : <span className="dropdown_content__content" >No option</span>
    ) 
}