import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import 'primeicons/primeicons.css';
import "../TPOComponents/tpodashboard.css"
import editUser from "../../Assests/EditUser.png"
import { useState } from 'react';
import companyDetailsJson from "../data/companyDetails.json"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const TPODashboard=()=>{
    const [companyDetails,setCompanyDetails] = useState(companyDetailsJson);
    const navigate = useNavigate();

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Click to see full details
        </Tooltip>
    )
    
    const discriptonCropper=(text)=>{
        const maxLength=160;
        const truncatedText = text.length > maxLength? text.slice(0, maxLength) + '. . .' : text;
        return truncatedText;
    }

    const handleOpenCompanyViewPage=(company)=>{
        navigate(`/TPO/CompanyViewPage`,{state: {companyData: company}});
    }

    return(
        <div className="tpo-home">
        <div className="tpo-topnav">
            <div className="tpo-top-navbar">
                <Navbar>
                        <Navbar.Brand href="home"><b className='heading'>TPO DASHBOARD</b></Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className='tpo-navbar-text'>
                        <Link to="/TPO/UploadDrive"><button type="button" class="btn btn-sm btn-upload-drive">Upload Drive</button></Link>
                        <Link to="/ChangePassword"><img src={editUser} className='tpo-editUser' /></Link>
                        </Navbar.Text>
                        </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
        <div className="tpo-dashboard">
            <div className="tpo-sidebar-container">
                <div className="sidebar">
                    <div className={`tpo-sidebar-item active`}>
                        <Link to="/TPO/Dashboard" className="sidebar-link">
                        <i className="pi pi-home mr-2 icon"></i> Home
                        </Link>
                    </div>
                    <div className={`tpo-sidebar-item`}>
                        <Link to="/TPO/StudentDetails" className="sidebar-link">
                        <i className="pi pi-eye mr-2 icon"></i> Student Details
                        </Link>
                    </div>
                    <div className={`tpo-sidebar-item`}>
                        <Link to="/TPO/PlacementHistory" className="sidebar-link">
                        <i className="pi pi-history mr-2 icon"></i>Placement History
                        </Link>
                    </div>
                    <div className={`tpo-sidebar-item`}>
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
                    <button type="button" className="btn btn-sm tpo-search-btn " onClick={()=>{}}><span className="pi pi-search"></span> Search</button>
                </div>
                <div className="cards-class">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        {companyDetails.map((company)=>
                        <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}>
                        <div className="card-component tpo-card-component" onClick={()=>handleOpenCompanyViewPage(company)}>
                            <div class="col">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title">{company.name}</h5>
                                        <p class="card-text">{discriptonCropper(company.description)}</p>
                                    </div>
                                    <div class="card-footer">
                                        <div className="card-foot-text">
                                            <p className="card-text">Status:{company.status}</p>
                                            <p className="card-text">CTC:{company.CTC}</p>  
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        </OverlayTrigger>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default TPODashboard;