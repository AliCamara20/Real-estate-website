import { forwardRef } from "react"

const PropertyVideo  = forwardRef(
    (props, ref) => {
        return <iframe ref={ref} {...props} width="560" height="315" src="https://www.youtube-nocookie.com/embed/4jnzf1yj48M?si=XUn-SVJnjhTpWO0H&controls=0&start=61&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    }
)
export default PropertyVideo