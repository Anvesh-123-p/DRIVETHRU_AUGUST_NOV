import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import 'primeicons/primeicons.css';
import "../TPOComponents/tpodashboard.css"
import editUser from "../../Assests/EditUser.png"

const TPODashboard=()=>{
    return(
        <div className="tpo-home">
        <div className="tpo-topnav">
            <div className="tpo-top-navbar">
                <Navbar>
                    <Container>
                        <Navbar.Brand href="home"><b className='heading'>TPO DASHBOARD</b></Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                        <Link to="/TPO/UploadDrive"><button type="button" class="btn btn-sm btn-upload-drive">Upload Drive</button></Link>
                        <Link to="/ChangePassword"><img src={editUser} className='tpo-editUser' /></Link>
                        </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
        <div className="tpo-dashboard">
            <div className="tpo-sidebar-container">
                <div className="sidebar">
                    <div className={`sidebar-item`}>
                        <Link to="/TPO/Dashboard" className="sidebar-link">
                        <i className="pi pi-home mr-2 icon"></i> Home
                        </Link>
                    </div>
                    <div className={`sidebar-item`}>
                        <Link to="/TPO/StudentDetails" className="sidebar-link">
                        <i className="pi pi-eye mr-2 icon"></i> Student Details
                        </Link>
                    </div>
                    <div className={`sidebar-item`}>
                        <Link to="/TPO/PlacementHistory" className="sidebar-link">
                        <i className="pi pi-history mr-2 icon"></i>Placement History
                        </Link>
                    </div>
                    <div className={`sidebar-item`}>
                        <Link to="/TPO/Statistics" className="sidebar-link">
                        <i className="pi pi-chart-line mr-2 icon"></i>Statistics
                        </Link>
                    </div>
                    <div className={`sidebar-item-logout`}>
                        <Link to="/Login" className="sidebar-link">
                        <i className="pi pi-sign-out mr-2 icon"></i> Log Out
                        </Link>
                    </div>
                </div>
            </div>
            <div className='tpo-summary-container'>
                <div className="tpo-search-bar">
                    <input type="text" id="search" className="tpo-search-input" />
                    <button type="button" className="tpo-search-btn btn btn-sm" onClick={()=>{}}><span className="pi pi-search"> Search</span></button>
                </div>
                <div className="cards-class">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div className="card-component">
                            <div class="col">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                    <div class="card-footer">
                                        <div className="card-foot-text">
                                            <p className="card-text">Status:</p>
                                            <p className="card-text">CTC:</p>  
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-component">
                            <div class="col">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                    <div class="card-footer">
                                        <div className="card-foot-text">
                                            <p className="card-text">Status:</p>
                                            <p className="card-text">CTC:</p>  
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-component">
                            <div class="col">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                    <div class="card-footer">
                                        <div className="card-foot-text">
                                            <p className="card-text">Status:</p>
                                            <p className="card-text">CTC:</p>  
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-component">
                            <div class="col">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                    <div class="card-footer">
                                        <div className="card-foot-text">
                                            <p className="card-text">Status:</p>
                                            <p className="card-text">CTC:</p>  
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default TPODashboard;