import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "../TPOComponents/studentDetails.css"
import editUser from "../../Assests/EditUser.png"
import studentData from "../data/StudentsData.json"
const PDF_FILE_URL = "http://localhost:3000/YaminiChintaProfile.pdf"

const StudentDetails=()=>{
    const [studentDetailslist, setStudentDetailsList]=useState(studentData);

    const onButtonClick=(url)=>{
        const fileName=url.split("/").pop();
        const aTag=document.createElement('a');
        aTag.href=url;
        aTag.setAttribute('download',fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }
    return(
        <div className="student-details-container">
            <div className="student-details-topnav">
                <div className="student-details-top-navbar">
                    <Navbar>
                        <Navbar.Brand href="home" className="student-details-navbrand">
                                <button type="button" className="student-details-back-btn">
                                    <Link to="/TPO/Dashboard">
                                    <i className="pi pi-chevron-circle-left mr-2 student-details-back-icon"> Back</i>
                                    </Link>
                                </button>
                                <b className='student-details-heading'>Student Details</b></Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Link to="/ChangePassword"><img src={editUser} className='student-details-editUser' title="Change Password"/></Link>
                        </Navbar.Text>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
            <div className="student-details-body-container">
                <div className="student-details-table table-responsive">
                <table class="table table-hover">
                    <thead className="student-details-table-head">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Department</th>
                            <th scope="col">Percentage</th>
                            <th scope="col">Offer Letters Recieved</th>
                            <th scope="col">Company</th>
                            <th scope="col">Resume</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentDetailslist.map((student, index)=>
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{student.name}</td>
                                <td>{student.department}</td>
                                <td>{student.percentage}</td>
                                <td>{student.offerLettersReceived}</td>
                                <td>{student.company}</td>
                                <td><a class="stretched-link" className="student-details-download-pdf" onClick={()=>onButtonClick(PDF_FILE_URL)}>Download PDF</a></td>
                            </tr>
                        )}
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default StudentDetails;