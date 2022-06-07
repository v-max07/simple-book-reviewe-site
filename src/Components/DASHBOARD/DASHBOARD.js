import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const DASHBOARD = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 10000,
            "sell": 2041,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 20000,
            "sell": 4023,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 50000,
            "sell": 7026,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 50000,
            "sell": 5029,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 60000,
            "sell": 6001,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 70000,
            "sell": 6070,
            "revenue": 61000
        }
    ]
    return (
        <div style={{ marginTop: " 30px", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            
            {/* bar chart  */}
            <div>
                <h2 style={{ textAlign: "center", color:"blue" }}>Investment Vs Revenue</h2>
                <BarChart width={630} height={350} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="sell" fill="#82ca9d" />
                    <Bar dataKey="revenue" fill="#CA9C82" />
                </BarChart>
            </div>

            {/* line chart  */}
            <div>
                <h2 style={{ textAlign: "center", color: "blue" }}>Investment Vs Revenue</h2>

                <LineChart width={630} height={350} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                    <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                </LineChart>
            </div>
        </div>
    );
};

export default DASHBOARD;