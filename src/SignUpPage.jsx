
import { Link } from "react-router-dom"
function SignUpPage(){
    return(
        <section className="modal_container" >
                <div className="container modal">
                    <div className="modal_box">
                        <h1 className="modal_header">Sign <span className="em">Up</span></h1>
                        <form action="" id="modal_form">
                            <div className="input_box">
                                <label htmlFor="usernameEmail">Email</label> 
                                <input type="text" className="username_email" id="usernameEmail" required/>
                            </div>

                            <div className="input_box">
                                <label htmlFor="psswd">Password</label> 
                                <input type="password" className="password" id="psswd" required/>
                            </div>
                            <div className="input_box">
                                <label htmlFor="confirmPsswd">Confirm Password</label> 
                                <input type="password" className="password" id="confirmPsswd" required/>
                            </div>
                            <button className="logIn_btn"> <Link to= "/">Sign Up</Link></button>
                        </form>

                    </div>
                </div>
                
            </section>
    )
}

export default SignUpPage