import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "../HODComponents/studentList.css";

const StudentList=()=>{
    const [studentlist, setStudentList]=useState([]);
    return(
        <div className="studentlist-container">
            <div className="studentlist-topnav">
                <div className="studentlist-top-navbar">
                    <Navbar>
                        <Container>
                        <Navbar.Brand href="home"><button type="button" className="back-btn">
                                    <Link to="/HODdashboard">
                                    <i className="pi pi-chevron-circle-left mr-2 back-icon"> Back</i>
                                    </Link>
                                </button></Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content">
                        <Navbar.Text>
                            <b className='studentlist-heading'>Student List</b>
                        </Navbar.Text>
                        </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
            <div className="body-container">
                <div className="search-bar-nav">
                    <div class="form-group">
                        <label className="form-label">Department</label>
                        <select id="inputState" onChange={(e)=>{}} className="search-input">
                            <option defaultValue>Select Department</option>
                            <option vlaue="CSE">CSE</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="form-label" >Search By Any</label>
                        <input type="text" className="search-input" id="search" />
                    </div>    
                </div>
                <div className="studentlist-table table-responsive">
                <table class="table table-hover">
                    <thead className="table-head">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Ph.No</th>
                            <th scope="col">Dept</th>
                            <th scope="col">Percentage</th>
                            <th scope="col">NO.of Comp. Selected</th>
                            <th scope="col">Resume</th>
                            <th scope="col">Comments</th>
                        </tr>
                    </thead>
                    <tbody  class="table-group-divider">
                        <tr>
                            <td>1</td>
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
                            <td>qwe</td>
                            <td>qwe</td>
                        </tr>
                        {/* {studentlist.map((student)=>{
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

export default StudentList;