import TopNavbar from "../StudentNavBar/TopNavbar";
import SideBar from "../StudentSideBar/SideBar";
import StudentSummary from "../StudentSummary/StudentSummary"
import '../StudentDashboard/home.css'
import { Outlet } from "react-router-dom";

const Home=()=>{
    return(
        <div className="home">
            <div className="student-top-nav">
                <TopNavbar/>
            </div>
            <div className="student-dashboard">
                <div className="student-sidebar-container">
                    <SideBar/>
                </div>
                <div className="student-summary-container">
                    {/* <StudentSummary/> */}
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Home;