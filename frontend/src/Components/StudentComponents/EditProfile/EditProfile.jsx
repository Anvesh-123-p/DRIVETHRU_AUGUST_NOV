import "../EditProfile/editProfile.css"

const EditProfile=()=>{
    return(
        <div className="edit-profile-body">
          <div className="edit-profile-form">
            <h2>Edit Profile</h2>   

            <form onSubmit={(e) => {}}>
            <div className="container-fluid"> 
              <div class="row g-2">
                <div class="col-md-6 col-sm-6">
                    <label htmlFor="firstname" className="form-label">First Name</label>
                    <input type="text" className="form-control border border-dark" onChange={(e)=>{}} placeholder='FirstName' id="firstname"/>
                </div>
                <div class="col-md-6 col-sm-6">
                    <label htmlFor="lastname" className="form-label">Last Name</label>
                    <input type="text" className="form-control border border-dark" onChange={(e)=>{}} placeholder='LastName' id="lastname"/>
                </div>
              </div>

              <div className='row g-2'>
                <div className="col-md-6 col-sm-6 form-group">
                  <label htmlFor="inputState" className="form-label ">Department</label>
                  <select id="inputState" onChange={(e)=>{}} className="form-select form-control border border-dark">
                  <option defaultValue>Department</option>
                  <option value="CSE">Computer Science</option>
                  <option value="ECE">Electrical </option>
                  <option value="MECH">Mechanical</option>
                  <option value="CIVIL">Civil</option>
                  <option value="EEE">EEE</option>
                  </select>
                </div>
                <div className="col-md-6 col-sm-6 form-group">
                  <label htmlFor="inputState" className="form-label ">Gender</label>
                  <select id="inputState" onChange={(e)=>{}} className="form-select form-control border border-dark">
                  <option defaultValue>Gender</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                  </select>
                </div>                
              </div>

              <div className='row g-2'>
                <div class="col-md-6 col-sm-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control border border-dark" onChange={(e)=>{}} placeholder="Email" aria-describedby="emailHelp"/>
                </div>
                <div className="col-md-6 col-sm-6 form-group">
                    <label htmlFor="mobileNumber"   className="form-label" >Mobile Number</label>
                    <input type="text" className="form-control border border-dark" onChange={(e)=>{}} placeholder='Mobile Number'  aria-describedby="emailHelp"/>
                </div>
              </div>  

              <div className='row g-2'>
                <div className="col-md-6 col-sm-6 form-group">
                    <label htmlFor="percentage" id="labels" className="form-label">Percentage</label>
                    <input type="text" className="form-control border border-dark" onChange={(e)=>{}} placeholder="Percentage" />
                </div>
                <div className="col-md-6 col-sm-6 form-group">
                    <label htmlFor="rollNumber" id="labels" className="form-label">Roll Number</label>
                    <input type="text" className="form-control border border-dark" onChange={(e)=>{}} placeholder='Roll Number' />
                </div>
              </div>  

              <div className="row g-2">
                <div className="col-md-6 col-sm-6 form-group">
                    <label htmlFor="resume" id="labels" className="form-label">Resume</label>
                    <input type="file" className="form-control border border-dark"  onChange={(e)=>{}} placeholder='Resume' />
                </div>
                <div className="p-4 col-md-6 col-sm-6 edit-profile-buttons">
                    <button type="submit"  className="btn btn-secondary buttons">Cancel</button>
                    <button type="submit"  className="btn btn-dark buttons">Submit</button>
                </div>
              </div>
           
            </div> 
            </form>
          </div>
        </div>
    )
}

export default EditProfile;