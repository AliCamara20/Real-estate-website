import { useEffect} from "react";
import { useLocation } from "react-router-dom";

function useScrollToTop(){
    const {pathname} = useLocation();
    useEffect(() => {
        console.log(`route changed: ${pathname}`)
        window.scrollTo(0, 0)
    }, [])

    return null
}

export default useScrollToTop