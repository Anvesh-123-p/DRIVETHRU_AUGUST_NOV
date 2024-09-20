import React from "react";
import '../Login/login.css';
import workimage from "../../Assests/manWorking.jpg" 
import { Link } from "react-router-dom";

const Login=()=>{
    return(
        <div className="login-container">
            <div className="semi-circle-background"><img className="work-image" src={workimage}/></div>
            <div className="login-form">
                <h1 >WELCOME BACK</h1>
                <p className="signin-text">Sign in to Continue</p>

                <form>
                    <div className="form-group">
                        <label htmlFor="email"> Email/ Username</label>
                        <input type="text" id="email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"> Password</label>
                        <input type="password" id="password" className="form-control" />
                    </div>

                    <div className="form-group-atlast">
                        <div>
                            <input type="checkbox" id="rememberMe"/>
                            <label htmlFor="rememberMe"> Remember Me</label>
                        </div>
                        <div>
                            <Link to="/Login"> Forgot Password?</Link>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-class" >Sign In</button>
                </form>

                <p className="register-link">Don't have an account? <a href="#SignUp">Register here</a></p>
            </div>
        </div>
    )
}

export default Login;