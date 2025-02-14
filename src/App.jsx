import Layout from "./Layout"
import Home from "./Home"
import About from "./About"
import Blogs from "./Blogs"
import Contact from "./Contact"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Place from "./Place"
import ErrorPage from "./ErrorPage"
import CustomCarousel from "./Carousel"
import PropertyList from "./PropertyList"
import RatingStars from "./RatingStars"


function App() {

  

  return (

    <BrowserRouter  basename="/Real-estate-website">
      <Routes>
        <Route path="/" element = {<Layout />}>
          <Route index element = { <Home />} />
          <Route path="place/:placeId" element = {<Place />} />
          <Route path="properties/:locationName" element = {<PropertyList/>} />
          <Route path="about" element = {<About />} />
          <Route path="blogs" element = {<Blogs />} />
          <Route path="contact" element = {<Contact />} />
          <Route path="*" element = {<ErrorPage />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
    


  
  
}

export default App
