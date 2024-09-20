import TopNavbar from "../TopNavBar/TopNavbar";
import SideBar from "../SideBar/SideBar";

const Home=()=>{
    return(
        <div>
            <TopNavbar/>
            <div style={{marginTop:80}}><SideBar/></div>
        </div>
    )
}

export default Home;