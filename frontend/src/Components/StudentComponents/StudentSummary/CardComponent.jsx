import { Button } from "react-bootstrap";
import "../StudentSummary/studentSummary.css";

const CardComponent=()=>{
    return(
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
                    <Button  variant="light" className="enroll-btn">Enroll</Button>{' '}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardComponent;