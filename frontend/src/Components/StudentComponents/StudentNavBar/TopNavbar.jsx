import Navbar from 'react-bootstrap/Navbar';
import "./topNavBar.css"
import { Link } from "react-router-dom";
import editUser from "../../../Assests/EditUser.png"
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const TopNavbar=()=>{
    const heading="STUDENT DASHBOARD"
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Change Password
        </Tooltip>
      );
    return(
        <div className="top-navbar">
            <Navbar>
                    <Navbar.Brand href="home"><b className='student-home-heading'>{heading}</b></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text style={{marginRight:"20px"}}>
                    <OverlayTrigger
                        placement="left"
                        delay={{ show: 50, hide: 100 }}
                        overlay={renderTooltip}
                        >
                        <Link to="/ChangePassword"><img src={editUser} className='upload-drive-editUser'/></Link>
                    </OverlayTrigger>
                    </Navbar.Text>
                    </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default TopNavbar;