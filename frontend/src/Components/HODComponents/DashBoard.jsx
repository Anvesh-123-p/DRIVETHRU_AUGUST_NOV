import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import 'primeicons/primeicons.css';
import "../HODComponents/dashBoard.css";
import { useState } from 'react';
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import companyDetailsJson from "../data/companyDetails.json"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Dashboard=()=>{
    const [companyDetails,setCompanyDetails] = useState(companyDetailsJson);
    const [companyData, setCompanyData] = useState([])
    const [companyDetailsShow, setCompanyDetailsShow] = useState(false);

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

    const handleCompanyShow = (companyDataVar) => {
        setCompanyData(companyDataVar)
        setCompanyDetailsShow(true);
    }
    
    const handleCompanyClose = () => setCompanyDetailsShow(false);

    return(
    <div className="hod-home">
        <div className="hod-topnav">
            <div className="hod-top-navbar">
                <Navbar>
                        <Navbar.Brand href="home"><b className='hod-heading'>HOD DASHBOARD</b></Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text style={{marginRight:"10px"}}>
                            Signed in as: <Link to="/ChangePassword"> Mark Otto</Link>
                        </Navbar.Text>
                        </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
        <div className="hod-dashboard">
            <div className="hod-sidebar-container">
                <div className="sidebar">
                    <div className={`hod-sidebar-item active`}>
                        <Link to="/HOD/Dashboard" className="sidebar-link">
                        <i className="pi pi-home mr-2 icon"></i> Home
                        </Link>
                    </div>
                    <div className={`hod-sidebar-item`}>
                        <Link to="/HOD/StudentList" className="sidebar-link">
                        <i className="pi pi-eye mr-2 icon"></i> Student List
                        </Link>
                    </div>
                    <div className={`hod-sidebar-item`}>
                        <Link to="/HOD/ApprovalPage" className="sidebar-link">
                        <i className="pi pi-pencil mr-2 icon"></i>Students Approval page 
                        </Link>
                    </div>
                    <div className={`hod-sidebar-item-logout`}>
                        <Link to="/Login" className="sidebar-link">
                        <i className="pi pi-sign-out mr-2 icon"></i> Log Out
                        </Link>
                    </div>
                </div>
            </div>
            <div className='hod-summary-container'>
                <div className="hod-search-bar">
                    <input type="text" id="search" className="hod-search-input" />
                    <button type="button" className="hod-search-btn btn btn-sm" onClick={()=>{}}><span className="pi pi-search"></span> Search</button>
                </div>
                <div className="cards-class">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                    {companyDetails.map((company)=>
                        <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}>
                        <div className="card-component hod-card-component"  onClick={()=>handleCompanyShow(company)}>
                            <div class="col">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title">{company.name}</h5>
                                        <p class="card-text">{discriptonCropper(company.description)}</p>
                                    </div>
                                    <div class="card-footer">
                                        <div className="card-foot-text">
                                            <p className="card-text">Status: {company.status}</p>
                                            <p className="card-text">CTC: {company.CTC}</p>  
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
        <Modal
            show={companyDetailsShow}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                {companyData.name} ,  CTC: {companyData.CTC}Lakh
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Status: {companyData.status} </h4>
                <p>
                {companyData.description}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleCompanyClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    </div>
    )
}

export default Dashboard;