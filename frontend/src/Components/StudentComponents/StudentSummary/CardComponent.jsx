import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import "../StudentSummary/studentSummary.css";

const CardComponent=()=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
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
                    <Button  variant="light" className="enroll-btn" onClick={handleShow}>Enroll</Button>{' '}
                    </div>
                </div>
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
        </>
    )
}

export default CardComponent;