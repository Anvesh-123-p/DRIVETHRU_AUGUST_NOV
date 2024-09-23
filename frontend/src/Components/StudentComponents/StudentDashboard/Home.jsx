import TopNavbar from "../StudentNavBar/TopNavbar";
import SideBar from "../StudentSideBar/SideBar";
import StudentSummary from "../StudentSummary/StudentSummary"
import '../StudentDashboard/home.css'
import { Outlet } from "react-router-dom";

const Home=()=>{
    return(
        <div className="home">
        <div className="top-nav">
            <TopNavbar/>
        </div>
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