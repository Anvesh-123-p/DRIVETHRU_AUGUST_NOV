import "../ViewOfferLetter/viewOfferLetter.css"
import React, { useState } from "react";

const ViewOfferLetter=()=>{
    const [data, setdata]=useState([]);
    return(
        <table class="table view-offer-table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Company Name</th>
                <th scope="col">Status</th>
                <th scope="col">Selected Data</th>
                <th scope="col">CTC</th>
                <th scope="col">Offer Letter</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item)=>{
                    <tr>
                    <th scope="row">{}</th>
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>
                    </tr>
                })}
            </tbody>
            </table>
    )
}

export default ViewOfferLetter;