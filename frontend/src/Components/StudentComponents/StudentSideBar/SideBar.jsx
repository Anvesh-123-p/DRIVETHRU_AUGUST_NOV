import React, { useState } from 'react';
import 'primeicons/primeicons.css';
import "./sideBar.css"
import { Link } from 'react-router-dom';

const SideBar=()=>{
    const [activeLink, setActiveLink] = useState(0)

    return(
        <div className="sidebar">
            <div className={`sidebar-item ${activeLink===0 ? "active" : ""}`}
            onClick={()=>setActiveLink(0)}>
                <Link to="/home" className="sidebar-link">
                <i className="pi pi-home mr-2 icon"></i> Home
                </Link>
            </div>
            <div className={`sidebar-item ${activeLink===1 ? "active" : ""}`}
            onClick={()=>setActiveLink(1)}>
                <Link to="/home/ViewOfferLetter" className="sidebar-link">
                <i className="pi pi-eye mr-2 icon"></i> View Offer Letter
                </Link>
            </div>
            <div className={`sidebar-item ${activeLink===2 ? "active" : ""}`}
            onClick={()=>setActiveLink(2)}>
                <Link to="/home/editProfile" className="sidebar-link">
                <i className="pi pi-pencil mr-2 icon"></i> Edit Profile
                </Link>
            </div>
            <div className={`sidebar-item ${activeLink===3 ? "active" : ""}`}
            onClick={()=>setActiveLink(3)}>
                <Link to="/home" className="sidebar-link">
                <i className="pi pi-sign-out mr-2 icon"></i> Log Out
                </Link>
            </div>
        </div>
        // <div class="sidenav">
        //     <a href="#about"><i className="pi pi-home mr-2"></i> Home</a>
        //     <a href="#services"><i className="pi pi-eye mr-2"></i> View Offer Letter</a>
        //     <a href="#clients"><i className="pi pi-pencil mr-2"></i> Edit Profile</a>
        //     <div className="logout">
        //         <a href="#clients"><i className="pi pi-sign-out mr-2"></i> Log Out</a>
        //     </div>
        // </div>
    )
}

export default SideBar;