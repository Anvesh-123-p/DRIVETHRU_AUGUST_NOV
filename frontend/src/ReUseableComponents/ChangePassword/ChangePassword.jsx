import "../ChangePassword/changePassword.css"
import workimage from "../../Assests/manWorking.jpg" 

const ChangePassword=()=>{
    return(
        <div className="change-password-container">
            <div className="semi-circle-background"><img className="work-image" src={workimage}/></div>
            <div className="change-password-form">
                <h4>CHANGE PASSWORD</h4>
                <form>
                    <div className="form-group">
                        <label htmlFor="email"> Email/ PhoneNumber</label>
                        <input type="text" id="email" className="form-control" placeholder="Enter Email or Phonenumber" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">New Password</label>
                        <input type="password" id="password" className="form-control" placeholder="Enter New Password" />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" id="cpassword" className="form-control" placeholder="Re-Enter New Password"/>
                    </div>
                    <button type="submit" className="btn btn-class" >Change Password</button>
                </form>
            </div>
        </div>
    )
}
export default ChangePassword;