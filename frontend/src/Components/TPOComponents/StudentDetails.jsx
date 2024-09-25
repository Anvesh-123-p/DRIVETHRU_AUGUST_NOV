import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "../TPOComponents/studentDetails.css"
import editUser from "../../Assests/EditUser.png"

const StudentDetails=()=>{
    const [studentDetailslist, setStudentDetailsList]=useState([]);
    return(
        <div className="student-details-container">
            <div className="student-details-topnav">
                <div className="student-details-top-navbar">
                    <Navbar>
                        <Navbar.Brand href="home" className="student-details-navbrand">
                                <button type="button" className="student-details-back-btn" data-bs-placement="right" title="Back to Dashboard">
                                    <Link to="/TPO/Dashboard">
                                    <i className="pi pi-chevron-circle-left mr-2 student-details-back-icon"></i>
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
                            <th scope="col">Resume</th>
                            <th scope="col">Company</th>
                            <th scope="col">Offer Letters Recieved</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>qwe</td>
                            <td>qwe</td>
                            <td>qwe</td>
                            <td>qwe</td>
                            <td>qwe</td>
                            <td>qwe</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>qwe</td>
                            <td>qwe</td>
                            <td>qwe</td>
                            <td>qwe</td>
                            <td>qwe</td>
                            <td>qwe</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>qwe</td>
                            <td>qwe</td>
                            <td>qwe</td>
                            <td>qwe</td>
                            <td>qwe</td>
                            <td>qwe</td>
                        </tr>
                        {/* {studentDetailsList.map((student)=>{
                            <tr>
                                <th scope="row">{}</th>
                                <td>{}</td>
                                <td>{}</td>
                                <td>{}</td>
                                <td>{}</td>
                                <td>{}</td>
                                <td>{}</td>
                                <td>{}</td>
                                <td>{}</td>
                            </tr>
                        })} */}
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default StudentDetails;