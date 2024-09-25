import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "../TPOComponents/placementHistory.css"
import editUser from "../../Assests/EditUser.png"

const PlacementHistory=()=>{
    const [placementStudentDetailslist, setPlacementStudentDetailsList]=useState([]);
    return(
        <div className="placement-history-container">
            <div className="placement-history-topnav">
                <div className="placement-history-top-navbar">
                    <Navbar>
                        <Navbar.Brand href="home" className="placement-history-navbrand">
                                <button type="button" className="placement-history-back-btn" data-bs-placement="right" title="Back to Dashboard">
                                    <Link to="/TPO/Dashboard">
                                    <i className="pi pi-chevron-circle-left mr-2 placement-history-back-icon"></i>
                                    </Link>
                                </button>
                                <b className='placement-history-heading'>Placement History</b></Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Link to="/ChangePassword"><img src={editUser} className='placement-history-editUser' title="Change Password"/></Link>
                        </Navbar.Text>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
            <div className="placement-history-body-container">
                <div className="placement-history-table table-responsive">
                <table class="table table-hover">
                    <thead className="placement-history-table-head">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Company Name</th>
                            <th scope="col">CTC</th>
                            <th scope="col">Status</th>
                            <th scope="col">Selected Students</th>
                        </tr>
                    </thead>
                    <tbody>
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
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>qwe</td>
                            <td>qwe</td>
                            <td>qwe</td>
                            <td>qwe</td>
                        </tr>
                        {/* {placementStudentDetailslist.map((student)=>{
                            <tr>
                                <th scope="row">{}</th>
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

export default PlacementHistory;