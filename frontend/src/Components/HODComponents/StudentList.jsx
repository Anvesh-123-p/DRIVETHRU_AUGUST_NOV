import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "../HODComponents/studentList.css";
import studentData from "../data/StudentsData.json"

const StudentList=()=>{
    const [studentlist, setStudentList]=useState(studentData);
    const [filterStudentlist, setFilterStudentlist] = useState(studentData)

    const onSearchByDept=(e)=>{
        const value=e.target.value;
        console.log(value);
        
        const filteredRows = studentlist.filter((row) => {
            return row.department.toString().toLowerCase().includes(value.toString().toLowerCase());
        });
        if (value.length < 1) {
            setFilterStudentlist(studentlist)
        }
        else {
            setFilterStudentlist(filteredRows)
        }
    }

    const onSearchByAny=(searchedVal)=>{
        const filteredRows = studentlist.filter((row) => {
            return row.name.toString().toLowerCase().includes(searchedVal.toString().toLowerCase()) ||
            row.percentage.toString().toLowerCase().includes(searchedVal.toString().toLowerCase()) ||
            row.companiesSelected.toString().toLowerCase().includes(searchedVal.toString().toLowerCase());
        });
        if (searchedVal.length < 1) {
            setFilterStudentlist(studentlist)
        }
        else {
            setFilterStudentlist(filteredRows)
        }
    }

    return(
        <div className="studentlist-container">
            <div className="studentlist-topnav">
                <div className="studentlist-top-navbar">
                    <Navbar>
                        <Container className="studentlist-navbar-container">
                        <Navbar.Brand href="home"><button type="button" className="back-btn">
                                    <Link to="/HOD/Dashboard">
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
            <div className="studentlist-body-container">
                <div className="studentlist-search-bar-nav">
                    <div class="form-group">
                        <label className="form-label">Department</label>
                        <select id="inputState" onChange={(e)=>{onSearchByDept(e)}} className="studentlist-search-input">
                            <option defaultValue value="">Select Department</option>
                            <option value="CSE">Computer Science (CSE)</option>
                            <option value="EEE">Electrical (EEE)</option>
                            <option value="MECH">Mechanical (Mech)</option>
                            <option value="CIVIL">Civil</option>
                            <option value="ECE">Electonics (ECE)</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="form-label" >Search By Any</label>
                        <input type="text" className="studentlist-search-input" id="search" onChange={(e)=>onSearchByAny(e.target.value)}/>
                    </div>    
                </div>
                <div className="studentlist-table table-responsive">
                <table class="table table-hover">
                    <thead class="studentlist-table-head">
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
                    <tbody>
                        {filterStudentlist.map((student, index)=>
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.phoneNumber}</td>
                                <td>{student.department}</td>
                                <td>{student.percentage}</td>
                                <td>{student.companiesSelected}</td>
                                <td>{student.resume}</td>
                                <td>{student.hodComments}</td>
                            </tr>
                        )}
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default StudentList;