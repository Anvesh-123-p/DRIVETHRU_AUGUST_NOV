import "../StudentSummary/studentSummary.css";
import companyDetailsJson from "../../data/companyDetails.json"
import { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const StudentSummary=()=>{
    const [companyDetails,setCompanyDetails] = useState(companyDetailsJson);
    const [companyData, setCompanyData] = useState([])
    const [show, setShow] = useState(false);
    const [companyDetailsShow, setCompanyDetailsShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () =>setShow(true);

    const handleCompanyShow = (companyDataVar) => {
        setCompanyData(companyDataVar)
        setCompanyDetailsShow(true);
    }
    
    const handleCompanyClose = () => setCompanyDetailsShow(false);

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
    return(
        <div>
            <div className="student-search-bar">
                <input type="text" id="search" className="student-search-input" />
                <button type="button" className="student-search-btn" onClick={()=>{}}><span className="pi pi-search"></span> Search</button>
            </div>
            <div className="cards-class">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                {companyDetails.map((company)=>
                <div className="card-component">
                    <div class="col">
                        <div class="card h-100">   
                            <OverlayTrigger
                            placement="top"
                            delay={{ show: 150, hide: 100 }}
                            overlay={renderTooltip}>
                                <div class="card-body student-card-body" onClick={()=>handleCompanyShow(company)}>
                                    <h5 class="card-title">{company.name}</h5>
                                    <p class="card-text">{discriptonCropper(company.description)}</p>
                                </div>
                            </OverlayTrigger>
                                <div class="card-footer">
                                <div className="card-foot-text">
                                    <p className="card-text">Status: {company.status}</p>
                                    <p className="card-text">CTC: {company.CTC}</p>  
                                </div> 
                                <Button  variant="light" className="enroll-btn" onClick={handleShow}>Enroll</Button>{' '}
                                </div>
                        </div>
                    </div>
                </div>
                )}
                </div>
            </div>
            <Modal show={show} onHide={handleClose} centered>
            {/* <Modal.Header>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header> */}
            <Modal.Body><p>Please Check If your profile is updated properly before submitting.</p>
            <h5>Sure to Enroll?</h5></Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                No
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Yes
            </Button>
            </Modal.Footer>
        </Modal>
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
export default StudentSummary;