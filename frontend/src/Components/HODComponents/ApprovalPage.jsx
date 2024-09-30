import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "../HODComponents/approvalPage.css"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import studentData from "../data/StudentsData.json"

const ApprovalPage=()=>{
    const [studentDataList, setStudentDataList ] = useState(studentData);
    const [updatedStudent, setUpdatedStudent]=useState({});

    // useEffect(async () => {
    //     const result = await axios.get("", formData,{ headers : {"Content-Type":"multipart/form-data"}})
    //     if(result.data.status=="ok"){
    //         setStudentDataList(result.students)
    //     }
    //   },[])
    
    const onAccept=(rollNo)=>{
        studentDataList.map((student)=>{
            if(student.rollNo===rollNo){
                const studentdata=student;
                studentdata.approvalType="approved"
                setUpdatedStudent(studentdata)
                console.log(studentdata);
            }
        })

        // const result = await axios.post("", ,{ updatedStudent : {"Content-Type":"multipart/form-data"}})
        // if(result.data.status=="ok"){
        //     alert("Upload Successfully")
        // }
    }

    const onReject=(rollNo)=>{
        studentDataList.map((student)=>{
            if(student.rollNo===rollNo){
                const studentdata=student;
                student.approvalType="rejected"
                console.log(studentdata);
                
                setUpdatedStudent(studentdata)
            }
        })

        // const result = await axios.post("", ,{ updatedStudent : {"Content-Type":"multipart/form-data"}})
        // if(result.data.status=="ok"){
        //     alert("Upload Successfully")
        // }
    }
    return(
        <div className="approvalpage-container">
            <div className="approvalpage-topnav">
                <div className="approvalpage-top-navbar">
                    <Navbar>
                        <Container className="approvalpage-navbar-container">
                        <Navbar.Brand href="home">
                            <button type="button" className="approvalpage-back-btn">
                                <Link to="/HOD/Dashboard">
                                    <i className="pi pi-chevron-circle-left mr-2 approvalpage-back-icon"> Back</i>
                                </Link>
                            </button>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content">
                        <Navbar.Text>
                            <b className='approvalpage-heading'>HOD Approval</b>
                        </Navbar.Text>
                        </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
            <div className="approvalpage-body-container">
                <div className="approvalpage-table">
                <Tabs
                    defaultActiveKey="PendingStudentList"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                    justify
                    >
                    <Tab eventKey="PendingStudentList" title="Pending Student List">
                    <div className="table-responsive">
                        <table class="table table-hover">
                        <thead className="approvalpage-table-head">
                            <tr>
                                <th scope="col">Roll.No</th>
                                <th scope="col">Department</th>
                                <th scope="col">Approval Type</th>
                                <th scope="col">Action</th>
                                <th scope="col">Comments</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentDataList.map((student)=>
                                student.approvalType=="pending" &&
                                <tr>
                                    <td>{student.rollNo}</td>
                                    <td>{student.department}</td>
                                    <td>{student.approvalType}</td>
                                    <td>
                                        <div class="d-grid gap-2 d-md-block">
                                            <button type="button" class="btn btn-success" onClick={()=>onAccept(student.rollNo)}>Accept</button>
                                            <button type="button" class="btn btn-danger reject-button" onClick={()=>onReject(student.rollNo)}>Reject</button>
                                        </div>
                                    </td>
                                    <td><input type="text" id="comment" value={student.hodComments} className="form-control comment-input" /></td>
                                </tr>
                                
                            )}
                        </tbody>
                        </table>
                    </div>
                    </Tab>
                    <Tab eventKey="ApprovedStudentList" title="Approved Student List">
                    <div className="table-responsive">
                        <table class="table table-hover">
                        <thead className="approvalpage-table-head">
                            <tr>
                                <th scope="col">Roll.No</th>
                                <th scope="col">Department</th>
                                <th scope="col">Approval Type</th>
                                <th scope="col">Comments</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentDataList.map((student)=>
                                student.approvalType=="approved" &&
                                <tr>
                                    <td>{student.rollNo}</td>
                                    <td>{student.department}</td>
                                    <td>{student.approvalType}</td>
                                    <td>{student.hodComments}</td>
                                </tr>
                            )}
                        </tbody>
                        </table>
                    </div>
                    </Tab>
                    <Tab eventKey="RejectedStudentList" title="Rejected Student List">
                    <div className="table-responsive">
                        <table class="table table-hover">
                        <thead className="approvalpage-table-head">
                            <tr>
                                <th scope="col">Roll.No</th>
                                <th scope="col">Department</th>
                                <th scope="col">Approval Type</th>
                                <th scope="col">Comments</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentDataList.map((student)=>
                                student.approvalType=="rejected" &&
                                <tr>
                                    <td>{student.rollNo}</td>
                                    <td>{student.department}</td>
                                    <td>{student.approvalType}</td>
                                    <td>{student.hodComments}</td>
                                </tr>
                            )}
                        </tbody>
                        </table>
                    </div>
                    </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default ApprovalPage;