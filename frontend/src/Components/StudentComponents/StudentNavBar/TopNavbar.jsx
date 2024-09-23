import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./topNavBar.css"

const TopNavbar=()=>{
    const heading="STUDENT DASHBOARD"
    return(
        <div className="top-navbar">
            <Navbar>
                <Container>
                    <Navbar.Brand href="home"><b className='heading'>{heading}</b></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default TopNavbar;