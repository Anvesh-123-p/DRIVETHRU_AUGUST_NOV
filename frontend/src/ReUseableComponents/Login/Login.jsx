import React, { useState } from "react";
import '../Login/login.css';
import workimage from "../../Assests/manWorking.jpg" 
import { Link } from "react-router-dom";

const Login=()=>{
    const [emailOrMobileNumber, setEmailOrMobileNumber]=useState("");
    const [password, setPassword]=useState("");
    
    const onSubmitLoginForm=async(e)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.append("emailOrMobileNumber", emailOrMobileNumber);
        formData.append("password", password);
        console.log("FORM DATA----------------------------------")
        formData.forEach((data)=>{
          console.log(data)
        })

        // const result = await axios.post("", formData,{ headers : {"Content-Type":"multipart/form-data"}})
        // if(result.data.status=="ok"){
        //     alert("Upload Successfully")
        // }
    }
    return(
        <div className="login-container">
            <div className="semi-circle-background"><img className="work-image" src={workimage}/></div>
            <div className="login-form">
                <h1 >WELCOME BACK</h1>
                <p className="signin-text">Sign in to Continue</p>

                <form onSubmit={onSubmitLoginForm}>
                    <div className="form-group">
                        <label htmlFor="email"> Email/ Username</label>
                        <input type="text" id="email" className="form-control" onChange={(e)=>{setEmailOrMobileNumber(e.target.value)}} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"> Password</label>
                        <input type="password" id="password" className="form-control" onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>

                    <div className="form-group">
                        <Link to="/ChangePassword"> Forgot Password?</Link>
                    </div>
                    
                    <button type="submit" className="btn btn-class" >Login In</button>
                </form>

                <p className="register-link">Don't have an account? <a href="/SignUp">Register here</a></p>
            </div>
        </div>
    )
}

export default Login;