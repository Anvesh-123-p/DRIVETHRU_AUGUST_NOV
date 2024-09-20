import React from "react";
import '../Login/login.css';
import workimage from "../../Assests/manWorking.jpg" 

const Login=()=>{
    return(
        <div className="login-container">
            <div className="semi-circle-background"><img src="workimage"/></div>
            <div className="login-form">
                <h2 className="welcome-text">WELCOME BACK</h2>
                <p>Sign in to Continue</p>

                <form>
                    <div className="form-group">
                        <label htmlFor="email"> Email/Username</label>
                        <input type="text" id="email" className="form-control" placeholder="Enter Your email or username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"> Password</label>
                        <input type="password" id="password" className="form-control" placeholder="Enter your password"/>
                    </div>

                    <div className="form-group">
                        <input type="checkbox" id="rememberMe"/>
                        <label htmlFor="rememberMe"> Remember Me</label>
                    </div>
                    <button type="submit" className="btn btn-primary" >Sign In</button>
                </form>

                <p className="register-link">Don't have an account? <a href="#SignUp">Register here</a></p>
            </div>
        </div>
    )
}

export default Login;