import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "../TPOComponents/companyViewPage.css"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useParams, useLocation } from 'react-router-dom';
import companyDetails from "../data/companyDetails.json";
import studentsData from "../data/StudentsData.json"

const CompanyViewPage=()=>{
    const location = useLocation();
    let CompanyData=undefined;
    if(location.state){
        CompanyData=location.state.companyData;
    }
    
    //useEffect(async () => {
    //     const result = await axios.get("", CompanyData.name)
    //     if(result.data.status=="ok"){
    //         setStudentDataList(result.data)
    //     }
    //   },[])

    const [studentlist, setStudentList]=useState([]);
    const [filterStudentlist, setFilterStudentlist] = useState([])
    const [searchQuery, setSearchQuery]=useState("");
    const [isChecked, setIsChecked] = useState(false);


    
    for(let i=0;i<studentsData.length;i++){
        console.log(studentsData[i])
        // if(studnet.company==CompanyData.name){
        //     studentListVar.push(studnet)
        // }
    }
    
    
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
        console.log(searchedVal)
        setSearchQuery(searchedVal)
        const filteredRows = studentlist.filter((row) => {
            return row.name.toString().toLowerCase().includes(searchedVal.toString().toLowerCase()) ||
            row.percentage.toString().toLowerCase().includes(searchedVal.toString().toLowerCase()) ||
            row.department.toString().toLowerCase().includes(searchedVal.toString().toLowerCase());
        });
        if (searchedVal.length < 1) {
            setFilterStudentlist(studentlist)
        }
        else {
            setFilterStudentlist(filteredRows)
        }
    }

    const onCheckBoxChnage=(event)=>{
        setIsChecked(event.target.checked);
        console.log(event.target)
        console.log(event.target.checked);
    }
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
                                <h5 className="companyViewPage-company-details-heading">Company Name:<p className="compViewPage-paragraph">{CompanyData.name}</p></h5>
                            </div>
                            <div class="col-lg-2 col-md-auto">
                                <h5 className="companyViewPage-company-details-heading">CTC:<p className="compViewPage-paragraph">{CompanyData.CTC} Lakh</p></h5>
                            </div>
                            <div class="col-lg-3 col-md-auto">
                                <h5 className="companyViewPage-company-details-heading">No.of Students Enrolled:<p className="compViewPage-paragraph">{}</p></h5>
                            </div>
                            <div class="col-lg-2 col-md-4"></div>
                        </div>
                        <div class="row">
                            <div class="col-md-auto">
                                <h5 className="companyViewPage-company-details-heading">Job Role Discription :<p className="compViewPage-paragraph">{CompanyData.description}</p></h5>
                            </div>
                        </div>
                    </div>
                    <div className="companyViewPage-seachbar">
                    <div className='row g-2'>
                        <div className="col-md-4 col-sm-6 form-group">
                            <div class="input-group">
                                <label class="input-group-text companyViewPage-search-btn" for="inputGroupSelect01">Department</label>
                                <select class="form-select" id="inputGroupSelect01" onChange={(e)=>{onSearchByDept(e)}}>
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
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search By Any Value"  aria-describedby="button-addon2" onChange={(e)=>onSearchByAny(e.target.value)} />
                                <button class="btn btn-outline-primary companyViewPage-search-btn" type="button" id="button-addon2" onClick={(e)=>onSearchByAny(searchQuery)}>Search</button>
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
                            {filterStudentlist.map((student)=>
                                <tr>
                                    <td>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={isChecked} onChange={(e)=>onCheckBoxChnage(e)}/>
                                        </div>
                                    </td>
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                    <td>{student.phoneNumber}</td>
                                    <td>{student.department}</td>
                                    <td>{student.resume}</td>
                                    <td>{student.companiesSelected}</td>
                                    <td>{student.hodComments}</td>
                                    <td><input type="text" id="comment" className="form-control comment-input" /></td>
                                </tr>
                            )}
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
                                    <td>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        </div>
                                    </td>
                                    <td>{student.}</td>
                                    <td>{student.}</td>
                                    <td>{student.}</td>
                                    <td>{student.}</td>
                                    <td>{student.}</td>
                                    <td>{student.}</td>
                                    <td>{student.}</td>
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
                            
                            {/* {studentlist.map((student)=>
                                <tr>
                                    <td>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        </div>
                                    </td>
                                    <td>{student.}</td>
                                    <td>{student.}</td>
                                    <td>{student.}</td>
                                    <td>{student.}</td>
                                    <td>{student.}</td>
                                    <td>{student.}</td>
                                    <td>{student.}</td>
                                    <td><input type="text" id="comment" className="form-control comment-input" /></td>
                                </tr>
                            )} */}
                        </tbody>
                        </table>
                    </div>
                    <div className="companyViewPage-buttons">
                        <button type="button" class="btn btn-secondary cancel-drive-button">Cancel Drive</button>
                        <button type="button" class="btn btn-primary submit-drive-button">Submit</button>
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
                                    <td>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        </div>
                                    </td>
                                    <td>{student.}</td>
                                    <td>{student.}</td>
                                    <td>{student.}</td>
                                    <td>{student.}</td>
                                    <td>{student.}</td>
                                    <td>{student.}</td>
                                    <td>{student.}</td>
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
                                    <td>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        </div>
                                    </td>
                                    <td>{student.}</td>
                                    <td>{student.}</td>
                                    <td>{student.}</td>
                                    <td>{student.}</td>
                                    <td>{student.}</td>
                                    <td>{student.}</td>
                                    <td>{student.}</td>
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
                    </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default CompanyViewPage;