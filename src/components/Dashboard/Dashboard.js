import React, { useEffect, useState } 
from 'react';
import { Area, AreaChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
// pimort axios from 'axios'

const Dashboard = () => {
    // const[laptop,setLaptop]=useState([])
    // useEffect(()=>{
    //    axios.get('dataAnalys.json')
    //    .then(data=>console.log(data))
    // },[])
    const data=[
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='d-block'>
            <div className='p-5'>
            <h3 className='mx-5 mt-5 text-center'>Month Wise Sell</h3>
            <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="sell" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="month" />
    <YAxis />
   
  </LineChart> 
  <p className='mx-5 p-5 text-muted'>sell</p>
            </div>

            <div className='p-5'>
           <h3  className='mx-5 mt-5 text-center'>Investment VS Revenue</h3>
        <AreaChart
          width={600}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      
            </div>
        </div>
    );
};

export default Dashboard;