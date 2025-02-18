import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab);
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import adam from './assets/Adam_walcorn.jpg'
import grag from './assets/Grack_chappel.jpg'
import james from './assets/james_n_green.jpg'
import jasmine from './assets/jasmine_khatri.jpg'
import seema from './assets/Seema_gauranki.jpg'
import BlogComment from './Comment';
const Comments = () => {
   return(
    <div className="selected_blog__comments">
        <h2 className="num_of_comments">05 Comments</h2>
        <div className="selected_blog_comments__comments">
            <BlogComment comment_img={james} comment_name={'Roselina William'} comment_date={'12th March 2024'} >
              <FontAwesomeIcon icon="fa-solid fa-bookmark" size='xs' className="bookmark_icon" />
            </BlogComment>
            <BlogComment comment_img={grag} comment_name={'Grack Rockefeller'} comment_date={'24th April 2024'} />
            <BlogComment comment_img={adam} comment_name={'Adam Munir'} comment_date={'13th May 2024'} />
            <BlogComment comment_img={jasmine} comment_name={'Rita Khatri'} comment_date={'23th May 2024'} />
        </div>
        <div className="comments_form">
        <h2 className="comment_form_header">Post Comments</h2>
            <form action="" className="comment_form contact_form" id='contact-form'>
                <div className="row contact_form_inputs">
                    <div className="input_box contact_form_input_text">
                    <input type="text" placeholder="Name" id="name" />
                    </div>
                    <div className="input_box contact_form_email">
                    <input type="email" id="email"  placeholder="Email"  />
                    </div>
                </div>
                <div className="input_box">
                    <textarea name="" id="text_area" className="enq_description review_message contact_message" placeholder="Message" ></textarea>
                </div>
                <input type="submit" className="submit_comment_btn" value={'Submit'} />
            </form>
        </div>
    </div>
   )
}



export const Bloggger = () => {
    return(
        <div className="selected_blog__blogger">
            <img src={james} alt="" className="selected_blog__blogger_img" />
            <h3 className="blogger_name">James Williams</h3>
            <SocialShare />
            <p className="blog_detail blogger_detail">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo.
            </p>
        </div>
    )
   
}

const SocialShare = () => {
    return(
        <div className="blogger_socail_share">
            <FontAwesomeIcon icon="fa-brands fa-facebook-f" size='xm'   />
            <FontAwesomeIcon icon="fa-brands fa-x-twitter" size='xm' />
            <FontAwesomeIcon icon="fa-brands fa-behance" size='xm' />
            <FontAwesomeIcon icon="fa-brands fa-youtube" size='xm' />
            <FontAwesomeIcon icon="fa-brands fa-linkedin-in" size='xm' />
        </div>
    )
    
}

export default Comments