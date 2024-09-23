import CardComponent from "./CardComponent";
import "../StudentSummary/studentSummary.css";

const StudentSummary=()=>{
    return(
        <div>
            <div className="search-bar">
                <input type="text" id="search" className="search-input" />
                <button type="button" className="search-btn" onClick={()=>{}}><span className="pi pi-search"> Search</span></button>
            </div>
            <div className="cards-class">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                </div>
            </div>
        </div>
    )
}
export default StudentSummary;