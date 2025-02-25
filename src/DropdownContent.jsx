 export const dropdownContent = (contents) => {
    return contents.map( (content, cIndex) => <span className="dropdown_content__content" key={cIndex}>{content}</span>
    ) 
}