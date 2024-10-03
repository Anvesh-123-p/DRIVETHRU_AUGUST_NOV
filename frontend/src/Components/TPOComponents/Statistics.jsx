import React, { useState } from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import "../TPOComponents/statistics.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import revenueData from "../data/revenueData.json";
import sourceData from "../data/sourceData.json";

import * as XLSX from 'xlsx';

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const Statistics=()=>{
    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };


    const exportToExcel = (data, fileName) => {
        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
        XLSX.writeFile(wb, fileName + ".xlsx");
    };

    return(
        <div className="statistics-container">
            <div className="statistics-topnav">
            <div className="statistics-top-navbar">
                    <Navbar>
                        <Container className="statistics-navbar-container">
                        <Navbar.Brand href="home">
                            <button type="button" className="statistics-back-btn">
                                <Link to="/TPO/Dashboard">
                                    <i className="pi pi-chevron-circle-left mr-2 statistics-back-icon"> Back</i>
                                </Link>
                            </button>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content">
                        <Navbar.Text>
                            <b className='statistics-heading'>Statistics</b>
                        </Navbar.Text>
                        </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>

            <div className="statistics-body-containeer">
                <div className="statistics-dropdown-export">
                    <div class="input-group statistics-dropdown">
                        <label class="input-group-text statistics-export-btn" for="inputGroupSelect01">Select</label>
                        <select class="form-select" id="inputGroupSelect01" value={selectedValue} onChange={handleChange}>
                            <option value="">Yearly Placed Students & Non-Placed Students</option>
                            <option value="Last 5 Year Statistics">Last 5 Year Statistics</option>
                            <option value="Last Year Statistics ">Last Year Statistics </option>
                            <option value="Placed Students">Placed Students</option>
                            <option value="Students placed in Companies">Students placed in Companies</option>
                            <option value="Technical & Non-Techical">Technical & Non-Techical</option>
                        </select>
                    </div>
                    <button class="btn btn-outline-primary statistics-export-btn" onClick={() => exportToExcel(revenueData, 'my-revenue-data')}>Export</button>    
                </div>
                <div className="statistics-body">
                    {selectedValue ?
                    (<>
                    <div className="dataCard customerCard">
                    <Bar
                    data={{
                        labels: sourceData.map((data) => data.label),
                        datasets: [
                        {
                            label: "Count",
                            data: sourceData.map((data) => data.value),
                            backgroundColor: [
                            "rgba(43, 63, 229, 0.8)",
                            "rgba(250, 192, 19, 0.8)",
                            "rgba(253, 135, 135, 0.8)",
                            "rgba(255, 132, 252, 0.8)",
                            "rgba(158, 196, 4, 0.8)",
                            ],
                            borderRadius: 5,
                        },
                        ],
                    }}
                    options={{
                        plugins: {
                        title: {
                            text: selectedValue
                        },
                        },
                    }}
                    />
                    </div>

                    <div className="dataCard categoryCard">
                    <Doughnut
                    data={{
                        labels: sourceData.map((data) => data.label),
                        datasets: [
                        {
                            label: "Count",
                            data: sourceData.map((data) => data.value),
                            backgroundColor: [
                            "rgba(43, 63, 229, 0.8)",
                            "rgba(250, 192, 19, 0.8)",
                            "rgba(253, 135, 135, 0.8)",
                            "rgba(255, 132, 252, 0.8)",
                            "rgba(158, 196, 4, 0.8)",
                            ],
                            borderColor: [
                            "rgba(43, 63, 229, 0.8)",
                            "rgba(250, 192, 19, 0.8)",
                            "rgba(253, 135, 135, 0.8)",
                            "rgba(255, 132, 252, 0.8)",
                            "rgba(158, 196, 4, 0.8)",
                            ],
                        },
                        ],
                    }}
                    options={{
                        plugins: {
                        title: {
                            text: selectedValue,
                        },
                        },
                    }}
                    />
                    </div>
                    </>):
                    (<>
                    <div className={`dataCard revenueCard`}>
                    <Line
                    data={{
                        labels: revenueData.map((data) => data.label),
                        datasets: [
                        {
                            label: "Placed Students",
                            data: revenueData.map((data) => data.revenue),
                            backgroundColor: "#064FF0",
                            borderColor: "#064FF0",
                        },
                        {
                            label: "Non Placed Students",
                            data: revenueData.map((data) => data.cost),
                            backgroundColor: "#FF3030",
                            borderColor: "#FF3030",
                        },
                        ],
                    }}
                    options={{
                        elements: {
                        line: {
                            tension: 0.5,
                        },
                        },
                        plugins: {
                        title: {
                            text: "Yearly Placed Students & Non-Placed Students",
                        },
                        },
                    }}
                    />
                    </div></>)}
                </div>
            </div>
        </div>
    )
}

export default Statistics;