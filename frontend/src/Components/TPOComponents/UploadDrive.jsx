import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "../TPOComponents/uploadDrive.css"
import editUser from "../../Assests/EditUser.png"

const UploadDrive=()=>{
    const [companyName, setCompanyName] = useState("");
    const [eligibilityPercentage, setEligibilityPercentage] = useState("");
    const [primarySkill, setPrimarySkill] = useState("");
    const [secondarySkill, setSecondarySkill] = useState("");
    const [resume, setResume] = useState(null);
    const [eligibilityDepartment, setEligibilityDepartment] = useState("");
    const [ctc, setCTC] = useState("");
    const [noOfRounds, setNoOfRounds] = useState("");
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState(new Date());

    const onSubmitUploadDrive=async(e)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.append("companyName", companyName);
        formData.append("eligibilityPercentage", eligibilityPercentage);
        formData.append("primarySkill", primarySkill);
        formData.append("secondarySkill", secondarySkill);
        formData.append("resume", resume);
        formData.append("eligibilityDepartment", eligibilityDepartment);
        formData.append("ctc", ctc);
        formData.append("noOfRounds", noOfRounds);
        formData.append("description", description);
        formData.append("startDate", startDate);
        console.log("FORM DATA----------------------------------")
        formData.forEach((data)=>{
          console.log(data)
        })
      }
    return(
        <div className="upload-drive-container">
            <div className="upload-drive-topnav">
                <div className="upload-drive-top-navbar">
                    <Navbar>
                        <Navbar.Brand href="home" className="upload-drive-navbrand">
                                <button type="button" className="upload-drive-back-btn">
                                    <Link to="/TPO/Dashboard">
                                    <i className="pi pi-chevron-circle-left mr-2 upload-drive-back-icon"> Back</i>
                                    </Link>
                                </button>
                                <b className='upload-drive-heading'>Upload a Drive</b></Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Link to="/ChangePassword"><img src={editUser} className='upload-drive-editUser' title="Change Password"/></Link>
                        </Navbar.Text>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
            <div className="upload-drive-body-container">
                <div className="upload-drive-form">
                    <form onSubmit={onSubmitUploadDrive}>
                    <div className="row justify-content-md-center">
                        <div className="col-md-4 col-sm-3 form-group">
                            <label htmlFor="companyName" className="upload-drive-formlabel">Company Name</label>
                            <input type="text" className="form-control" placeholder="Enter Company Name" onChange={(e)=>{setCompanyName(e.target.value)}} required/>
                        </div>
                        <div className="col-md-4 col-sm-3 form-group">
                            <label htmlFor="eligibilityPercentage" className="upload-drive-formlabel">Eligibility Percentage</label>
                            <input type="text" className="form-control" placeholder="Enter Eligibility %" onChange={(e)=>{setEligibilityPercentage(e.target.value)}} required/>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-md-4 col-sm-4 form-group">
                            <label htmlFor="primarySkillSet" className="upload-drive-formlabel">Primary Skill Set</label>
                            <select id="primarySkillSet" className="form-select form-control border border-dark" onChange={(e)=>{setPrimarySkill(e.target.value)}} required>
                            <option defaultValue>Select Primary Skill</option>
                            <option value="CSE">JAVA</option>
                            <option value="ECE">React JS </option>
                            <option value="MECH">SQL</option>
                            <option value="CIVIL">Python</option>
                            <option value="EEE">Typescript</option>
                            </select>
                        </div>
                        <div className="col-md-4 col-sm-4 form-group">
                            <label htmlFor="secondarySkillSet" className="upload-drive-formlabel">Secondary Skill Set</label>
                            <select id="secondarySkillSet" className="form-select form-control border border-dark" onChange={(e)=>{setSecondarySkill(e.target.value)}} required>
                            <option defaultValue>Select secondary SKill</option>
                            <option value="CSE">C++</option>
                            <option value="ECE">Django </option>
                            <option value="MECH">HTML</option>
                            <option value="CIVIL">CSS</option>
                            <option value="EEE">Spring Boot</option>
                            </select>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-md-4 col-sm-4 form-group">
                            <label htmlFor="resume" className="upload-drive-formlabel">Resume</label>
                            <input type="file" accept=".pdf" className="form-control border border-dark" placeholder='Resume' onChange={(e)=>{setResume(e.target.value)}} required/>
                        </div>
                        <div className="col-md-4 col-sm-4 form-group">
                        <label htmlFor="eligibilityDept" className="upload-drive-formlabel">Eligibility Department</label>
                            <select id="eligibilityDept" className="form-select form-control border border-dark" onChange={(e)=>{setEligibilityDepartment(e.target.value)}} required>
                                <option defaultValue>Select Eligibility Departmet</option>
                                <option value="CSE">CSE</option>
                                <option value="ECE">ECE </option>
                                <option value="MECH">EEE</option>
                                <option value="CIVIL">Civil</option>
                                <option value="EEE">Mech</option>
                            </select>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-md-4 col-sm-4 form-group">
                            <label htmlFor="ctc" className="upload-drive-formlabel">CTC</label>
                            <input type="text" className="form-control" placeholder="Enter CTC" onChange={(e)=>{setCTC(e.target.value)}} required/>
                        </div>
                        
                        <div className="col-md-4 col-sm-4 form-group">
                            <label htmlFor="noofrounds" className="upload-drive-formlabel">No of Rounds</label>
                            <input type="text" className="form-control" placeholder="Enter Rounds" onChange={(e)=>{setNoOfRounds(e.target.value)}} required/>
                        </div>
                    </div>
                    <div className="row justify-content-md-center"> 
                        <div className="col-md-4 col-sm-4 form-group">
                            <label htmlFor="eligibilityDept" className="upload-drive-formlabel" >Description</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" onChange={(e)=>{setDescription(e.target.value)}} required></textarea>
                        </div>
                        <div className="col-md-4 col-sm-4 form-group">
                            <label htmlFor="startDate" className="upload-drive-formlabel">Start Date</label>
                            <input type="date" className="form-control" placeholder="Enter Start Date" onChange={(e)=>{setStartDate(e.target.value)}} required/>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <button type="submit" class="btn btn-success upload-drive-submit-btn">Submit</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UploadDrive;