import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "../HODComponents/approvalPage.css"

const ApprovalPage=()=>{
    return(
        <div className="approvalpage-container">
            <div className="approvalpage-topnav">
                <div className="approvalpage-top-navbar">
                    <Navbar>
                        <Container>
                        <Navbar.Brand href="home">
                            <button type="button" className="approvalpage-back-btn">
                                <Link to="/HODdashboard">
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
                <div className="approvalpage-tabs">
                       
                </div>
                <div className="approvalpage-table table-responsive">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Department</th>
                            <th scope="col">Approval Type</th>
                            <th scope="col">Roll.No</th>
                            <th scope="col">Action</th>
                            <th scope="col">Comments</th>
                        </tr>
                    </thead>
                    <tbody  class="table-group-divider">
                        <tr>
                            <td>1</td>
                            <td>qwe</td>
                            <td>qwe</td>
                            <td>qwe</td>
                            <td>
                                <div class="d-grid gap-2 d-md-block">
                                    <button type="button" class="btn btn-success">Accept</button>
                                    <button type="button" class="btn btn-danger reject-button">Reject</button>
                                </div>
                            </td>
                            <td><input type="text" id="comment" className="form-control comment-input" /></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>qwe</td>
                            <td>qwe</td>
                            <td>qwe</td>
                            <td>
                                <div class="d-grid gap-2 d-md-block">
                                    <button type="button" class="btn btn-success">Accept</button>
                                    <button type="button" class="btn btn-danger reject-button">Reject</button>
                                </div>
                            </td>
                            <td><input type="text" id="comment" className="form-control comment-input" /></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>qwe</td>
                            <td>qwe</td>
                            <td>qwe</td>
                            <td>
                                <div class="d-grid gap-2 d-md-block">
                                    <button type="button" class="btn btn-success">Accept</button>
                                    <button type="button" class="btn btn-danger reject-button">Reject</button>
                                </div>
                            </td>
                            <td><input type="text" id="comment" className="form-control comment-input" /></td>
                        </tr>
                        {/* {studentlist.map((student)=>{
                            <tr>
                                <th scope="row">{}</th>
                                <td>{}</td>
                                <td>{}</td>
                                <td>{}</td>
                                <td>
                                    <div class="d-grid gap-2 d-md-block">
                                        <button type="button" class="btn btn-success">Accept</button>
                                        <button type="button" class="btn btn-danger reject-button">Reject</button>
                                    </div>
                                </td>
                                <td><input type="text" id="comment" className="form-control comment-input" /></td>
                            </tr>
                        })} */}
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ApprovalPage;