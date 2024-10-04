import "../ChangePassword/changePassword.css"
import workimage from "../../Assests/manWorking.jpg" 
import { useState } from "react";

const ChangePassword=()=>{
    const [emailOrMobileNumber, setEmailOrMobileNumber]=useState("");
    const [password, setPassword]=useState("");
    const [cPassword, setCPassword]=useState("");
    
    const onSubmitChangePassword=async(e)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.append("emailOrMobileNumber", emailOrMobileNumber);
        formData.append("password", password);
        formData.append("cPassword", cPassword);
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
        <div className="change-password-container">
            <div className="semi-circle-background"><img className="work-image" src={workimage}/></div>
            <div className="change-password-form">
                <h4>CHANGE PASSWORD</h4>
                <form onSubmit={onSubmitChangePassword}>
                    <div className="form-group">
                        <label htmlFor="email"> Email/ PhoneNumber</label>
                        <input type="text" id="email" className="form-control" placeholder="Enter Email or Phonenumber" onChange={(e)=>{setEmailOrMobileNumber(e.target.value)}} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">New Password</label>
                        <input type="password" id="password" className="form-control" placeholder="Enter New Password" onChange={(e)=>{setPassword(e.target.value)}} required/>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" id="cpassword" className="form-control" placeholder="Re-Enter New Password" onChange={(e)=>{setCPassword(e.target.value)}} required/>
                    </div>
                    <button type="submit" className="btn btn-class" >Change Password</button>
                </form>
            </div>
        </div>
    )
}
export default ChangePassword;