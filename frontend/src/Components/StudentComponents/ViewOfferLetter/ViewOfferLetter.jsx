import "../ViewOfferLetter/viewOfferLetter.css"
import React, { useState } from "react";

const ViewOfferLetter=()=>{
    const [data, setdata]=useState([]);
    return(
        <table class="table view-offer-table table-hover table-responsivetable-responsive">
            <thead class="table-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Company Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Selected Date</th>
                    <th scope="col">CTC</th>
                    <th scope="col">Offer Letter</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr>
                    <th scope="row">1</th>
                    <td>asd</td>
                    <td>qwe</td>
                    <td>wer</td>
                    <td>afsd</td>
                    <td>fd</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>fsd</td>
                    <td>afd</td>
                    <td>asdf</td>
                    <td>asf</td>
                    <td>asf</td>
                </tr>
                {/* {data.map((item)=>{
                    <tr>
                    <th scope="row">{}</th>
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>
                    </tr>
                })} */}
            </tbody>
            </table>
    )
}

export default ViewOfferLetter;