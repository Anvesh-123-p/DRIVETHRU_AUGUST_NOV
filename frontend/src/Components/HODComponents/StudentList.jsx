import { useState } from "react";
import "../HODComponents/studentList.css";

const StudentList=()=>{
    const [studentlist, setStudentList]=useState([]);
    return(
        <div className="studentlist-container">
            <div className="topnav"></div>
            <div className="body-container">
                <div className="search-bar-nav">
                    <div className="department-search">
                        <div className='row g-2'>
                            <div class="col-md-6 col-sm-6 form-group">
                                <label className="form-label">Department</label>
                                <input type="text" className="search-input" id="search" />
                            </div>
                            <div className="col-md-6 col-sm-6 form-group">
                                <input type="text" className="search-input" id="search" />
                                <label className="form-label" >Search By Any</label>
                            </div>
                        </div> 
                    </div>
                    <div className="any-search"></div>
                </div>
                <div className="studentlist-table">
                <table class="table">
                    <thead>
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
                        {studentlist.map((student)=>{
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
                        })}
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default StudentList;