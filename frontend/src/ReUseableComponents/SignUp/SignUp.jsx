import React from "react";
import '../SignUp/signup.css';
import workimage from "../../Assests/manWorking.jpg" 

const SignUp=()=>{
    return(
        <div>
            <div className="body">
            <div className="box"><img className="image" src={workimage} alt=""/></div>
            <div> 
                <h1>Register Yourself</h1>   
             </div>

            <form className="row g-2" onSubmit={(e) => {}}>
            <div className='row g-2'>
            <div className="col-lg-3">
                <label htmlFor="inputname" className="form-label">First Name</label>
                <input type="text" className="form-control border border-dark" onChange={(e)=>{}} placeholder='Name' id="inputname"/>
            </div>
            <div className="col-lg-3">
                <label htmlFor="inputname" className="form-label">Last Name</label>
                <input type="text" className="form-control border border-dark" onChange={(e)=>{}} placeholder='Name' id="inputname"/>
            </div>
            </div>
            <div className='row g-2'>
            <div className="col-lg-3">
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
                
                <div className="col-lg-3">
                <label htmlFor="inputState" className="form-label ">Gender</label>
                <select id="inputState" onChange={(e)=>{}} className="form-select border border-dark">
                <option defaultValue>Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                </select>
                </div>
                </div>

            <div >
              <label htmlFor="exampleInputEmail1"   className="form-label" >Email</label>
              <input type="email" className="form-control border border-dark" onChange={(e)=>{}} placeholder="Email" id="exampleInput"  aria-describedby="emailHelp"/>
            </div>
            
            <div>
              <label htmlFor="exampleInputEmail1"   className="form-label" >Mobile Number</label>
              <input type="text" className="form-control border border-dark" onChange={(e)=>{}} placeholder='Mobile Number' id="exampleInput"  aria-describedby="emailHelp"/>
            </div>
            <div>
              <label htmlFor="exampleInputPassword1" id="labels" className="form-label">Percentage</label>
              <input type="text" className="form-control border border-dark" onChange={(e)=>{}} placeholder="Percentage" id="exampleInput" />
            </div>
            <div className="mb-0">
              <label htmlFor="exampleInputEmail1"   className="form-label" >Password</label>
              <input type="password" className="form-control border border-dark"  onChange={(e)=>{}} placeholder='Password' id="exampleInput"  aria-describedby="emailHelp"/>
            </div>
            <div>
              <label htmlFor="exampleInputPassword1" id="labels" className="form-label">Resume Link</label>
              <input type="text" className="form-control border border-dark"  onChange={(e)=>{}} placeholder='Resume Link' id="exampleInput" />
            </div>
            <div>
              <label htmlFor="exampleInputPassword1" id="labels" className="form-label">Adhar Number</label>
              <input type="text" className="form-control border border-dark" onChange={(e)=>{}} placeholder='Adhar Number' id="exampleInput" />
            </div>
            <button type="submit"  className={"btn btn-dark buttons"}>Submit</button>
           
            </form>
            </div>
        </div>
    )
}

export default SignUp;