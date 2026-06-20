const LogInPage = ({hideshow}) => {
    return(
            <section className="modal_container">
                <div className="container modal">
                    <div className="modal_closeBtn" onClick={hideshow}>&times;</div>
                    <div className="modal_box">
                        <h1 className="modal_header">Log <span className="em">In</span></h1>
                        <form action="" id="modal_form" onSubmit={e => e.preventDefault()}>
                            <div className="input_box">
                                <label htmlFor="usernameEmail">Username or Email</label> 
                                <input type="text" className="username_email" id="usernameEmail" required/>
                            </div>

                            <div className="input_box">
                                <label htmlFor="psswd">Password</label> 
                                <input type="password" className="password" id="psswd" required/>
                            </div>
                            <button className="logIn_btn">Login</button>
                            <p className="forget_psswd"><a href="" className="logIn_link">Forgot password</a></p>
                            <p className="no_account">Dont have an account? <a href="" className="logIn_link">Register</a></p>
                        </form>

                    </div>
                </div>
                
            </section>
    )
    
}

export default LogInPage