import React, { useState } from "react";
import '../SignUp/signup.css';
import workimage from "../../Assests/manWorking.jpg" 

const SignUp=()=>{
    const [firstName, setFirstName]=useState("");
    const [lastName, setLastName]=useState("");
    const [department, setDepartment]=useState("");
    const [gender, setGender]=useState("");
    const [email, setEmail]=useState("");
    const [mobileNumber, setMobileNumber]=useState("");
    const [password, setPassword]=useState("");
    const [percentage, setPercentage]=useState("");
    const [rollNo, setRollNo]=useState("");
    const [resumeFile, setResumeFile] = useState(null);

    const onSubmitSignupForm=async(e)=>{
      e.preventDefault();
      const formData=new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("department", department);
      formData.append("gender", gender);
      formData.append("email", email);
      formData.append("mobileNumber", mobileNumber);
      formData.append("password", password);
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
        <div>
          <div className="signup-body">
            <div className="box"><img className="image" src={workimage} alt=""/></div>
            <div> 
                <h1>Register Yourself</h1>   
            </div>

            <form onSubmit={onSubmitSignupForm}>
            <div className="g-2"> 
              <div className='row g-2'>
                <div className="col-lg-3 col-md-3">
                    <label htmlFor="inputname" className="form-label">First Name</label>
                    <input type="text" className="form-control border border-dark" onChange={(e)=>{setFirstName(e.target.value)}} placeholder='Name' id="inputname"/>
                </div>
                <div className="col-lg-3 col-md-3">
                    <label htmlFor="inputname" className="form-label">Last Name</label>
                    <input type="text" className="form-control border border-dark" onChange={(e)=>{setLastName(e.target.value)}} placeholder='Name' id="inputname"/>
                </div>
              </div>
              <div className='row g-2'>
                <div className="col-lg-3 col-md-3 ">
                  <label htmlFor="inputState" className="form-label ">Department</label>
                  <select id="inputState" onChange={(e)=>{setDepartment(e.target.value)}} className="form-select border border-dark">
                  <option defaultValue>Department</option>
                  <option value="CSE">Computer Science</option>
                  <option value="ECE">Electrical </option>
                  <option value="MECH">Mechanical</option>
                  <option value="CIVIL">Civil</option>
                  <option value="EEE">EEE</option>
                  </select>
                </div>
                
                <div className="col-lg-3 col-md-3 ">
                  <label htmlFor="inputState" className="form-label ">Gender</label>
                  <select id="inputState" onChange={(e)=>{setGender(e.target.value)}} className="form-select border border-dark">
                  <option defaultValue>Gender</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                  </select>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-2">
                <label htmlFor="email"   className="form-label" >Email</label>
                <input type="email" className="form-control border border-dark" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" aria-describedby="emailHelp"/>
              </div>
              
              <div className="col-lg-6 col-md-6 col-sm-2">
                <label htmlFor="mobileNumber"   className="form-label" >Mobile Number</label>
                <input type="text" className="form-control border border-dark" onChange={(e)=>{setMobileNumber(e.target.value)}} placeholder='Mobile Number' aria-describedby="emailHelp"/>
              </div>
              <div className="mb-0 col-lg-6 col-md-6 col-sm-2">
                <label htmlFor="password"   className="form-label" >Password</label>
                <input type="password" className="form-control border border-dark"  onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' aria-describedby="emailHelp"/>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-2">
                <label htmlFor="percentage"className="form-label">Percentage</label>
                <input type="text" className="form-control border border-dark" onChange={(e)=>{setPercentage(e.target.value)}} placeholder="Percentage" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-2">
                <label htmlFor="resume"className="form-label">Resume</label>
                <input type="file" accept=".pdf" className="form-control border border-dark"  onChange={(e)=>setResumeFile(e.target.files[0])} placeholder='Resume'/>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-2">
                <label htmlFor="rollNumber" className="form-label">Roll Number</label>
                <input type="text" className="form-control border border-dark" onChange={(e)=>{setRollNo(e.target.value)}} placeholder='Roll Number'  />
              </div>
              <button type="submit"  className={"btn btn-dark buttons"}>Submit</button>
           
            </div> 
            </form>
          </div>
        </div>
    )
}

export default SignUp;