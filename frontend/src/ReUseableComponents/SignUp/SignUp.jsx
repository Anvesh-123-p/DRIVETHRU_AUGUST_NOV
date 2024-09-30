import React, { useState } from "react";
import '../SignUp/signup.css';
import workimage from "../../Assests/manWorking.jpg" 

const SignUp=()=>{
    const [pdfFile, setPdfFile] = useState(null);

    const handleFileChange = (event) => {
      setPdfFile(event.target.files[0]);
    };
    return(
        <div>
          <div className="signup-body">
            <div className="box"><img className="image" src={workimage} alt=""/></div>
            <div> 
                <h1>Register Yourself</h1>   
            </div>

            <form onSubmit={(e) => {}}>
            <div className="g-2"> 
              <div className='row g-2'>
                <div className="col-lg-3 col-md-3">
                    <label htmlFor="inputname" className="form-label">First Name</label>
                    <input type="text" className="form-control border border-dark" onChange={(e)=>{}} placeholder='Name' id="inputname"/>
                </div>
                <div className="col-lg-3 col-md-3">
                    <label htmlFor="inputname" className="form-label">Last Name</label>
                    <input type="text" className="form-control border border-dark" onChange={(e)=>{}} placeholder='Name' id="inputname"/>
                </div>
              </div>
              <div className='row g-2'>
                <div className="col-lg-3 col-md-3 ">
                  <label htmlFor="inputState" className="form-label ">Department</label>
                  <select id="inputState" onChange={(e)=>{}} className="form-select border border-dark">
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
                  <select id="inputState" onChange={(e)=>{}} className="form-select border border-dark">
                  <option defaultValue>Gender</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                  </select>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-2">
                <label htmlFor="email"   className="form-label" >Email</label>
                <input type="email" className="form-control border border-dark" onChange={(e)=>{}} placeholder="Email" aria-describedby="emailHelp"/>
              </div>
              
              <div className="col-lg-6 col-md-6 col-sm-2">
                <label htmlFor="mobileNumber"   className="form-label" >Mobile Number</label>
                <input type="text" className="form-control border border-dark" onChange={(e)=>{}} placeholder='Mobile Number' aria-describedby="emailHelp"/>
              </div>
              <div className="mb-0 col-lg-6 col-md-6 col-sm-2">
                <label htmlFor="password"   className="form-label" >Password</label>
                <input type="password" className="form-control border border-dark"  onChange={(e)=>{}} placeholder='Password' aria-describedby="emailHelp"/>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-2">
                <label htmlFor="percentage" id="labels" className="form-label">Percentage</label>
                <input type="text" className="form-control border border-dark" onChange={(e)=>{}} placeholder="Percentage" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-2">
                <label htmlFor="resume" id="labels" className="form-label">Resume</label>
                <input type="file" accept=".pdf" className="form-control border border-dark"  onChange={handleFileChange} placeholder='Resume'/>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-2">
                <label htmlFor="rollNumber" id="labels" className="form-label">Roll Number</label>
                <input type="text" className="form-control border border-dark" onChange={(e)=>{}} placeholder='Roll Number'  />
              </div>
              <button type="submit"  className={"btn btn-dark buttons"}>Submit</button>
           
            </div> 
            </form>
          </div>
        </div>
    )
}

export default SignUp;