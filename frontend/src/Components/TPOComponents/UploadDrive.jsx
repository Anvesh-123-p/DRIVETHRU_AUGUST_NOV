import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "../TPOComponents/uploadDrive.css"
import editUser from "../../Assests/EditUser.png"

const UploadDrive=()=>{
    return(
        <div className="upload-drive-container">
            <div className="upload-drive-topnav">
                <div className="upload-drive-top-navbar">
                    <Navbar>
                        <Navbar.Brand href="home" className="upload-drive-navbrand">
                                <button type="button" className="upload-drive-back-btn" data-bs-placement="right" title="Back to Dashboard">
                                    <Link to="/TPO/Dashboard">
                                    <i className="pi pi-chevron-circle-left mr-2 upload-drive-back-icon"></i>
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
                    <div className="row justify-content-md-center">
                        <div className="col-md-4 col-sm-3 form-group">
                            <label htmlFor="companyName" className="upload-drive-formlabel">Company Name</label>
                            <input type="text" className="form-control" placeholder="Enter Company Name"/>
                        </div>
                        <div className="col-md-4 col-sm-3 form-group">
                            <label htmlFor="eligibilityPercentage" className="upload-drive-formlabel">Eligibility Percentage</label>
                            <input type="text" className="form-control" placeholder="Enter Eligibility %"/>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-md-4 col-sm-4 form-group">
                            <label htmlFor="primarySkillSet" className="upload-drive-formlabel">Primary Skill Set</label>
                            <select id="primarySkillSet" onChange={(e)=>{}} className="form-select form-control border border-dark">
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
                            <select id="secondarySkillSet" onChange={(e)=>{}} className="form-select form-control border border-dark">
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
                            <label htmlFor="resume" id="labels" className="upload-drive-formlabel">Resume</label>
                            <input type="file" className="form-control border border-dark"  onChange={(e)=>{}} placeholder='Resume' />
                        </div>
                        <div className="col-md-4 col-sm-4 form-group">
                        <label htmlFor="eligibilityDept" className="upload-drive-formlabel">Eligibility Department</label>
                            <select id="eligibilityDept" onChange={(e)=>{}} className="form-select form-control border border-dark">
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
                            <input type="text" className="form-control" placeholder="Enter CTC"/>
                        </div>
                        
                        <div className="col-md-4 col-sm-4 form-group">
                            <label htmlFor="noofrounds" className="upload-drive-formlabel">No of Rounds</label>
                            <input type="text" className="form-control" placeholder="Enter Rounds"/>
                        </div>
                    </div>
                    <div className="row justify-content-md-center"> 
                        <div className="col-md-4 col-sm-4 form-group">
                            <label htmlFor="eligibilityDept" className="upload-drive-formlabel">Eligibility Department</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                        </div>
                        <div className="col-md-4 col-sm-4 form-group">
                            <label htmlFor="startDate" className="upload-drive-formlabel">Start Date</label>
                            <input type="date" className="form-control" placeholder="Enter Start Date"/>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <button type="button" class="btn btn-success upload-drive-submit-btn">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadDrive;