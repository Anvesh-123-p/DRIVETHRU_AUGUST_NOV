import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import 'primeicons/primeicons.css';
import "../HODComponents/dashBoard.css";

const Dashboard=()=>{
    return(
    <div className='hod-home'>
        <div className="hod-topnav">
            <div className="top-navbar">
                <Navbar>
                    <Container>
                        <Navbar.Brand href="home"><b className='heading'>HOD DASHBOARD</b></Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <Link to="/home/changePassowrd"> Mark Otto</Link>
                        </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
        <div className="hod-dashboard">
            <div className="hod-sidebar-container">
                <div className="sidebar">
                    <div className={`sidebar-item`}>
                        <Link to="/HODdashboard" className="sidebar-link">
                        <i className="pi pi-home mr-2 icon"></i> Home
                        </Link>
                    </div>
                    <div className={`sidebar-item`}>
                        <Link to="/HODStudentList" className="sidebar-link">
                        <i className="pi pi-eye mr-2 icon"></i> Student List
                        </Link>
                    </div>
                    <div className={`sidebar-item`}>
                        <Link to="/HODApprovalPage" className="sidebar-link">
                        <i className="pi pi-pencil mr-2 icon"></i>Students Approval page 
                        </Link>
                    </div>
                    <div className={`sidebar-item-logout`}>
                        <Link to="/Login" className="sidebar-link">
                        <i className="pi pi-sign-out mr-2 icon"></i> Log Out
                        </Link>
                    </div>
                </div>
            </div>
            <div className='hod-summary-container'>
                <div className="search-bar">
                    <input type="text" id="search" className="search-input" />
                    <button type="button" className="search-btn btn btn-sm" onClick={()=>{}}><span className="pi pi-search"> Search</span></button>
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

export default Dashboard;