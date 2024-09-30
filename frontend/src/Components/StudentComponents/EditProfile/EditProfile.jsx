import { useState } from "react";
import "../EditProfile/editProfile.css"

const EditProfile=()=>{
    const [firstName, setFirstName]=useState("");
    const [lastName, setLastName]=useState("");
    const [department, setDepartment]=useState("");
    const [gender, setGender]=useState("");
    const [email, setEmail]=useState("");
    const [mobileNumber, setMobileNumber]=useState("");
    const [percentage, setPercentage]=useState("");
    const [rollNo, setRollNo]=useState("");
    const [resumeFile, setResumeFile] = useState(null);

    const onSubmitEditProfile=async(e)=>{
      e.preventDefault();
      const formData=new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("department", department);
      formData.append("gender", gender);
      formData.append("email", email);
      formData.append("mobileNumber", mobileNumber);
      formData.append("percentage", percentage);
      formData.append("rollNo", rollNo);
      formData.append("resumeFile", resumeFile);
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
        <div className="edit-profile-body">
          <div className="edit-profile-form">
            <h2>Edit Profile</h2>   

            <form onSubmit={onSubmitEditProfile}>
            <div className="container-fluid"> 
              <div class="row g-2">
                <div class="col-md-6 col-sm-6">
                    <label htmlFor="firstname" className="form-label">First Name</label>
                    <input type="text" className="form-control border border-dark" onChange={(e)=>{setFirstName(e.target.value)}} placeholder='FirstName' id="firstname"/>
                </div>
                <div class="col-md-6 col-sm-6">
                    <label htmlFor="lastname" className="form-label">Last Name</label>
                    <input type="text" className="form-control border border-dark" onChange={(e)=>{setLastName(e.target.value)}} placeholder='LastName' id="lastname"/>
                </div>
              </div>

              <div className='row g-2'>
                <div className="col-md-6 col-sm-6 form-group">
                  <label htmlFor="inputState" className="form-label ">Department</label>
                  <select id="inputState" onChange={(e)=>{setDepartment(e.target.value)}} className="form-select form-control border border-dark">
                  <option defaultValue value="">Department</option>
                  <option value="CSE">Computer Science (CSE)</option>
                  <option value="ECE">Electronics (ECE)</option>
                  <option value="MECH">Mechanical</option>
                  <option value="CIVIL">Civil</option>
                  <option value="EEE">Electrical (EEE)</option>
                  </select>
                </div>
                <div className="col-md-6 col-sm-6 form-group">
                  <label htmlFor="inputState" className="form-label ">Gender</label>
                  <select id="inputState" onChange={(e)=>{setGender(e.target.value)}} className="form-select form-control border border-dark">
                  <option defaultValue>Gender</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                  </select>
                </div>                
              </div>

              <div className='row g-2'>
                <div class="col-md-6 col-sm-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control border border-dark" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" aria-describedby="emailHelp"/>
                </div>
                <div className="col-md-6 col-sm-6 form-group">
                    <label htmlFor="mobileNumber"   className="form-label" >Mobile Number</label>
                    <input type="text" className="form-control border border-dark" onChange={(e)=>{setMobileNumber(e.target.value)}} placeholder='Mobile Number'  aria-describedby="emailHelp"/>
                </div>
              </div>  

              <div className='row g-2'>
                <div className="col-md-6 col-sm-6 form-group">
                    <label htmlFor="percentage" id="labels" className="form-label">Percentage</label>
                    <input type="text" className="form-control border border-dark" onChange={(e)=>{setPercentage(e.target.value)}} placeholder="Percentage" />
                </div>
                <div className="col-md-6 col-sm-6 form-group">
                    <label htmlFor="rollNumber" id="labels" className="form-label">Roll Number</label>
                    <input type="text" className="form-control border border-dark" onChange={(e)=>{setRollNo(e.target.value)}} placeholder='Roll Number' />
                </div>
              </div>  

              <div className="row g-2">
                <div className="col-md-6 col-sm-6 form-group">
                    <label htmlFor="resume" id="labels" className="form-label">Resume</label>
                    <input type="file" accept=".pdf" className="form-control border border-dark"  onChange={(e)=>{setResumeFile(e.target.files[0])}} placeholder='Resume' />
                </div>
                <div className="p-4 col-md-6 col-sm-6 edit-profile-buttons">
                    <button type="cancel"  className="btn btn-secondary buttons">Cancel</button>
                    <button type="submit"  className="btn editprofile-submit-btn buttons ">Submit</button>
                </div>
              </div>
           
            </div> 
            </form>
          </div>
        </div>
    )
}

export default EditProfile;