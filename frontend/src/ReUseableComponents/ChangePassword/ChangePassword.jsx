import "../ChangePassword/changePassword.css"

const ChangePassword=()=>{
    return(
        <div className="change-password-body">
            <div className="change-password-form">
                <h4>CHANGE PASSWORD</h4>
                <form>
                    <div className="form-group">
                        <label htmlFor="email"> Email/ Username</label>
                        <input type="text" id="email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"> Password</label>
                        <input type="password" id="password" className="form-control" />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" id="cpassword" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-secondary change-pass-btn" >Change Password</button>
                </form>
            </div>
        </div>
    )
}
export default ChangePassword;