import TopNavbar from "../StudentNavBar/TopNavbar";
import SideBar from "../StudentSideBar/SideBar";
import StudentSummary from "../StudentSummary"
import '../StudentDashboard/home.css'
import { Outlet } from "react-router-dom";

const Home=()=>{
    return(
        <div className="home">
        <TopNavbar/>
        <div className="dashboard">
            <div className="sidebar-container">
                <SideBar/>
            </div>
            <div className="summary-container">
                {/* <StudentSummary/> */}
                <Outlet/>
            </div>
        </div>
        </div>
    )
}

export default Home;