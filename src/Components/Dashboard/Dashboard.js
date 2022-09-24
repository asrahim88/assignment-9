import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area, ResponsiveContainer, Legend, ComposedChart, Bar, PieChart, Pie } from 'recharts';

const Dashboard = () => {
    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setChartData(data));
    }, []);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:w-10/12 w-full md:mx-auto md:place-items-center px-10 py-20 md:px-0' style={{ height: "100%" }}>
            <div style={{ position: 'relative', width: "100%", height: "100%" }}>
                <h1 className='text-xl md:text-2xl lg:text-4xl text-[#8884d8] font-semibold text-center py-5'>Month Wise Sell</h1>
                <ResponsiveContainer width="100%" height={500}>
                    <AreaChart data={chartData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="sell" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                        <Area type="monotone" dataKey="revenue" stroke="pink" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <div style={{ position: 'relative', width: "100%", height: "100%" }}>
            <h1 className='text-xl md:text-2xl lg:text-4xl text-[#82ca9d] font-semibold text-center py-5'>Invest VS Revenue</h1>
                <ResponsiveContainer width="100%" height={500}>
                    <LineChart data={chartData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                        <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="revenue" stroke="goldenrod" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div style={{ position: 'relative', width: "100%", height: "100%" }}>
            <h1 className='text-xl md:text-2xl lg:text-4xl text-[#413ea0] font-semibold text-center py-5'>Invest VS Revenue</h1>
                <ResponsiveContainer width="100%" height={500}>
                    <ComposedChart data={chartData}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                        <Line type="monotone" dataKey="sell" stroke="#413ea0" />
                        <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
                        <Bar dataKey="investment" barSize={20} fill="goldenrod" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
            <div style={{ position: 'relative', width: "100%", height: "100%" }}>
            <h1 className='text-xl md:text-2xl lg:text-4xl text-[goldenrod] font-semibold text-center py-5'>Invest VS Revenue</h1>
                <ResponsiveContainer width="100%" height={500}>
                    <PieChart >
                        <Pie data={chartData} dataKey="investment" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                        <Pie data={chartData} dataKey="sell" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                        <Pie data={chartData} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="goldenrod" label />
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Dashboard;