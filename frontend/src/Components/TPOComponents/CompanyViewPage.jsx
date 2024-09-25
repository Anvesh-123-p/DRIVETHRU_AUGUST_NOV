import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "../TPOComponents/companyViewPage.css"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const CompanyViewPage=()=>{
    return(
        <div className="companyViewPage-container">
            <div className="companyViewPage-topnav">
                <div className="companyViewPage-top-navbar">
                    <Navbar>
                        <Container className="companyViewPage-navbar-container">
                        <Navbar.Brand href="home">
                            <button type="button" className="companyViewPage-back-btn">
                                <Link to="/TPO/Dashboard">
                                    <i className="pi pi-chevron-circle-left mr-2 companyViewPage-back-icon"> Back</i>
                                </Link>
                            </button>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content">
                        <Navbar.Text>
                            <b className='companyViewPage-heading'>Company Details</b>
                        </Navbar.Text>
                        </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
            <div className="companyViewPage-body-container">
                <div className="companyViewPage-company-details-and-search">
                    <div className="companyViewPage-company-details">
                        <div class="row">
                            <div class="col-lg-4 col-md-auto">
                                <h5 className="companyViewPage-company-details-heading">Company Name:<p className="compViewPage-paragraph">TCS{}</p></h5>
                            </div>
                            <div class="col-lg-2 col-md-auto">
                                <h5>CTC:<p className="compViewPage-paragraph">{}</p></h5>
                            </div>
                            <div class="col-lg-3 col-md-auto">
                                <h5>No.of Students Enrolled:<p className="compViewPage-paragraph">{}</p></h5>
                            </div>
                            <div class="col-lg-2 col-md-4"></div>
                        </div>
                        <div class="row">
                            <div class="col-md-auto">
                                <h5>About:<p className="compViewPage-paragraph">{}</p></h5>
                            </div>
                        </div>
                    </div>
                    <div className="companyViewPage-seachbar">
                    <div className='row g-2'>
                        <div className="col-md-4 col-sm-6 form-group">
                            <div class="input-group mb-3">
                                <label class="input-group-text" for="inputGroupSelect01">Options</label>
                                <select class="form-select" id="inputGroupSelect01">
                                    <option defaultValue>Choose Department...</option>
                                    <option value="CSE">Computer Science</option>
                                    <option value="ECE">Electrical </option>
                                    <option value="MECH">Mechanical</option>
                                    <option value="CIVIL">Civil</option>
                                    <option value="EEE">EEE</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 form-group"></div>
                        <div className="col-md-4 col-sm-6 form-group">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Search By Any Value"  aria-describedby="button-addon2"/>
                                <button class="btn btn-outline-primary" type="button" id="button-addon2">Search</button>
                            </div>
                        </div>                
                    </div>
                    </div>
                </div>
                <div className="companyViewPage-table">
                <Tabs
                    defaultActiveKey="Round1"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                    justify
                    >
                    <Tab eventKey="Round1" title="Round 1">
                    <div className="companyViewPage-tabs-data">
                    <div className="table-responsive">
                        <table class="table table-hover">
                        <thead class="companyViewPage-table-head">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email Type</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Dept</th>
                                <th scope="col">Percentage</th>
                                <th scope="col">Resume</th>
                                <th scope="col">No.of Comp. Selected</th>
                                <th scope="col">Comments</th>
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
                                <td>qwe</td>
                                <td><input type="text" id="comment" className="form-control comment-input" /></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>qwe</td>
                                <td>qwe</td>
                                <td>qwe</td>
                                <td>qwe</td>
                                <td>qwe</td>
                                <td>qwe</td>
                                <td>qwe</td>
                                <td><input type="text" id="comment" className="form-control comment-input" /></td>
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
                                <td><input type="text" id="comment" className="form-control comment-input" /></td>
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
                                    <td><input type="text" id="comment" className="form-control comment-input" /></td>
                                </tr>
                            })} */}
                        </tbody>
                        </table>
                    </div>
                    <div className="companyViewPage-buttons">
                    <button type="button" class="btn btn-secondary cancel-drive-button">Cancel Drive</button>
                        <button type="button" class="btn btn-primary submit-drive-button">Submit</button>
                        </div>
                    </div>
                    </Tab>
                    <Tab eventKey="Round2" title="Round 2">
                    <div className="table-responsive">
                        <table class="table table-hover">
                        <thead class="companyViewPage-table-head">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email Type</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Dept</th>
                                <th scope="col">Percentage</th>
                                <th scope="col">Resume</th>
                                <th scope="col">No.of Comp. Selected</th>
                                <th scope="col">Comments</th>
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
                                <td>qwe</td>
                                <td><input type="text" id="comment" className="form-control comment-input" /></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>qwe</td>
                                <td>qwe</td>
                                <td>qwe</td>
                                <td>qwe</td>
                                <td>qwe</td>
                                <td>qwe</td>
                                <td>qwe</td>
                                <td><input type="text" id="comment" className="form-control comment-input" /></td>
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
                                <td><input type="text" id="comment" className="form-control comment-input" /></td>
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
                                    <td><input type="text" id="comment" className="form-control comment-input" /></td>
                                </tr>
                            })} */}
                        </tbody>
                        </table>
                    </div>
                    </Tab>
                    <Tab eventKey="Round3" title="Round 3">
                    <div className="table-responsive">
                        <table class="table table-hover">
                        <thead class="companyViewPage-table-head">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email Type</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Dept</th>
                                <th scope="col">Percentage</th>
                                <th scope="col">Resume</th>
                                <th scope="col">No.of Comp. Selected</th>
                                <th scope="col">Comments</th>
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
                                <td>qwe</td>
                                <td><input type="text" id="comment" className="form-control comment-input" /></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>qwe</td>
                                <td>qwe</td>
                                <td>qwe</td>
                                <td>qwe</td>
                                <td>qwe</td>
                                <td>qwe</td>
                                <td>qwe</td>
                                <td><input type="text" id="comment" className="form-control comment-input" /></td>
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
                                <td><input type="text" id="comment" className="form-control comment-input" /></td>
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
                                    <td><input type="text" id="comment" className="form-control comment-input" /></td>
                                </tr>
                            })} */}
                        </tbody>
                        </table>
                    </div>
                    </Tab>
                    <Tab eventKey="HRRound" title="HR Round">
                    <div className="table-responsive">
                        <table class="table table-hover">
                        <thead class="companyViewPage-table-head">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email Type</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Dept</th>
                                <th scope="col">Percentage</th>
                                <th scope="col">Resume</th>
                                <th scope="col">No.of Comp. Selected</th>
                                <th scope="col">Comments</th>
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
                                <td>qwe</td>
                                <td><input type="text" id="comment" className="form-control comment-input" /></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>qwe</td>
                                <td>qwe</td>
                                <td>qwe</td>
                                <td>qwe</td>
                                <td>qwe</td>
                                <td>qwe</td>
                                <td>qwe</td>
                                <td><input type="text" id="comment" className="form-control comment-input" /></td>
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
                                <td><input type="text" id="comment" className="form-control comment-input" /></td>
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
                                    <td><input type="text" id="comment" className="form-control comment-input" /></td>
                                </tr>
                            })} */}
                        </tbody>
                        </table>
                    </div>
                    </Tab>
                    <Tab eventKey="UploadOfferLetter" title="Upload Offer Letter">
                    <div className="table-responsive">
                        <table class="table table-hover">
                        <thead class="companyViewPage-table-head">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email Type</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Dept</th>
                                <th scope="col">Percentage</th>
                                <th scope="col">Resume</th>
                                <th scope="col">No.of Comp. Selected</th>
                                <th scope="col">Comments</th>
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
                                <td>qwe</td>
                                <td><input type="text" id="comment" className="form-control comment-input" /></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>qwe</td>
                                <td>qwe</td>
                                <td>qwe</td>
                                <td>qwe</td>
                                <td>qwe</td>
                                <td>qwe</td>
                                <td>qwe</td>
                                <td><input type="text" id="comment" className="form-control comment-input" /></td>
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
                                <td><input type="text" id="comment" className="form-control comment-input" /></td>
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
                                    <td><input type="text" id="comment" className="form-control comment-input" /></td>
                                </tr>
                            })} */}
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

export default CompanyViewPage;