import Layout from "./Layout"
import Home from "./Home"
import About from "./About"
import Blogs from "./Blogs"
import Contact from "./Contact"
import Blog from "./Blog"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Place from "./Place"
import PropertyList from "./PropertyList"
import ErrorPage from "./ErrorPage"
import FaQS from "./FAQS"
import LocationMap from "./Map"



function App() {

  

  return (

    
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Layout />}>
          <Route index element = { <Home />} />
          <Route path="place/:placeId" element = {<Place />} />
          <Route path="properties/:locationName" element = {<PropertyList/>} />
          <Route path="about" element = {<About />} />
          <Route path="blogs" element = {<Blogs />} />
          <Route path="blogs/:blogId" element = {<Blog />} />
          <Route path="contact" element = {<Contact />} />
          <Route path="faqs" element = {<FaQS />} />
          <Route path="*" element = {<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
    


  
  
}

export default App
