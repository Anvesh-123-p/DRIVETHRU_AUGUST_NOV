import 'primeicons/primeicons.css';
import "../SideBar/sideBar.css"

const SideBar=()=>{
    return(
        <div class="sidenav">
            <a href="#about"><i className="pi pi-home mr-2"></i> Home</a>
            <a href="#services"><i className="pi pi-eye mr-2"></i> View Offer Letter</a>
            <a href="#clients"><i className="pi pi-pencil mr-2"></i> Edit Profile</a>
            <div className="logout">
                <a href="#clients"><i className="pi pi-sign-out mr-2"></i> Log Out</a>
            </div>
        </div>
    )
}

export default SideBar;