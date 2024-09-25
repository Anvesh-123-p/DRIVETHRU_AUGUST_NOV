import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import "../TPOComponents/statistics.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import revenueData from "../data/revenueData.json";
import sourceData from "../data/sourceData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const Statistics=()=>{
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
                <div className="statistics-body">
                    <div className="dataCard revenueCard">
                    <Line
                    data={{
                        labels: revenueData.map((data) => data.label),
                        datasets: [
                        {
                            label: "Revenue",
                            data: revenueData.map((data) => data.revenue),
                            backgroundColor: "#064FF0",
                            borderColor: "#064FF0",
                        },
                        {
                            label: "Cost",
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
                            text: "Monthly Revenue & Cost",
                        },
                        },
                    }}
                    />
                    </div>

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
                            ],
                            borderRadius: 5,
                        },
                        ],
                    }}
                    options={{
                        plugins: {
                        title: {
                            text: "Revenue Source",
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
                            ],
                            borderColor: [
                            "rgba(43, 63, 229, 0.8)",
                            "rgba(250, 192, 19, 0.8)",
                            "rgba(253, 135, 135, 0.8)",
                            ],
                        },
                        ],
                    }}
                    options={{
                        plugins: {
                        title: {
                            text: "Revenue Sources",
                        },
                        },
                    }}
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistics;