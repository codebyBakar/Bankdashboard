// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Legend
// } from 'recharts';

// // Sample data points based on the chart's visual trend
// const data = [
//   { year: '2016', value: 10000 },
//   { year: '2017', value: 20000 },
//   { year: '2018', value: 35000 },
//   { year: '2019', value: 40000 },
//   { year: '2020', value: 25000 },
//   { year: '2021', value: 30000 }
// ];

// const Linechartpage4 = () => {
//   return (
//     <div style={{ width: '100%', height: 400, padding: '20px', backgroundColor: '#f9f9f9' }}>
//       <ResponsiveContainer width="100%" height="100%">
//         <LineChart
//           data={data}
//           margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
//         >
//           <CartesianGrid 
//             strokeDasharray="3 3" 
//             stroke="#e0e0e0" 
//             vertical={false}
//           />
//           <XAxis 
//             dataKey="year" 
//             tick={{ fontSize: 12, fontWeight: 500 }}
//             axisLine={false}
//             tickLine={false}
//             tickMargin={10}
//           />
//           <YAxis 
//             tickCount={5}
//             tickFormatter={(value) => `$${value.toLocaleString()}`}
//             tick={{ fontSize: 12 }}
//             axisLine={false}
//             tickLine={false}
//             tickMargin={10}
//             domain={[0, 40000]}
//           />
//           <Tooltip 
//             formatter={(value) => [`$${value.toLocaleString()}`, 'Value']}
//             labelFormatter={(label) => label}
//             contentStyle={{
//               backgroundColor: '#fff',
//               border: '1px solid #ddd',
//               borderRadius: '8px',
//               boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
//             }}
//           />
//           <Line
//             type="monotone"
//             dataKey="value"
//             stroke="#F4A261" // Exact orange color from the chart
//             strokeWidth={3}
//             dot={{
//               fill: "#F4A261",
//               strokeWidth: 2,
//               stroke: "#fff",
//               r: 6
//             }}
//             activeDot={{
//               r: 8,
//               stroke: "#F4A261",
//               strokeWidth: 3,
//               fill: "#fff"
//             }}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default Linechartpage4;


// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const data = [
//   { name: '2016', value: 5000 },
//   { name: '2017', value: 23000 },
//   { name: '2018', value: 15000 },
//   { name: '2019', value: 37000 },
//   { name: '2020', value: 20000 },
//   { name: '2021', value: 29000 },
// ];

// const LineChartpg4 = () => {
//   return (
//     <div style={{ width: '100%', height: 300, backgroundColor: 'white', borderRadius: '15px', padding: '20px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)' }}>
//       <ResponsiveContainer>
//         <LineChart
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
//           <XAxis dataKey="name" tickLine={false} axisLine={false} stroke="#888" />
//           <YAxis
//             tickFormatter={(value) => `$${value.toLocaleString()}`}
//             tickLine={false}
//             axisLine={false}
//             stroke="#888"
//             domain={[0, 40000]}
//             ticks={[0, 10000, 20000, 30000, 40000]}
//           />
//           <Tooltip />
//           <Line
//             type="monotone"
//             dataKey="value"
//             stroke="#F7B228" // Orange color
//             strokeWidth={3}
//             dot={{ r: 6, fill: '#F7B228', stroke: '#F7B228', strokeWidth: 2 }}
//             activeDot={{ r: 8, fill: '#F7B228', stroke: '#F7B228', strokeWidth: 2 }}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default LineChartpg4;

// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const data = [
//   { month: 'Jan', value: 65 },
//   { month: 'Feb', value: 59 },
//   { month: 'Mar', value: 80 },
//   { month: 'Apr', value: 81 },
//   { month: 'May', value: 56 },
//   { month: 'Jun', value: 55 },
//   { month: 'Jul', value: 40 },
// ];

// const LineChartpg4 = () => {
//   return (
//     <div style={{
//       width: '100%',
//       maxWidth: '600px',
//       margin: 'auto',
//       padding: '20px',
//       backgroundColor: 'white',
//       borderRadius: '20px',
//       boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//       fontFamily: 'Arial, sans-serif'
//     }}>
//       <ResponsiveContainer width="100%" height={300}>
//         <LineChart data={data} margin={{ top: 20, right: 30, left: 60, bottom: 20 }}>
//           <CartesianGrid strokeDasharray="0" stroke="none" />
//           <XAxis 
//             dataKey="month" 
//             tick={{ fill: '#888', fontSize: 12 }} 
//             axisLine={{ stroke: '#ddd' }}
//             tickLine={false}
//           />
//           <YAxis 
//             ticks={[0, 20, 40, 60, 80, 100]}
//             tickFormatter={(value) => `${value}`}
//             tick={{ fill: '#888', fontSize: 12 }}
//             axisLine={false}
//             tickLine={false}
//           />
//           <Tooltip 
//             formatter={(value) => `${value}`}
//             contentStyle={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '8px' }}
//           />
//           <Line 
//             type="linear" // Changed to "linear" for sharp corners
//             dataKey="value" 
//             stroke="rgb(75, 192, 192)" 
//             strokeWidth={3} 
//             dot={{ fill: 'rgb(75, 192, 192)', r: 6, strokeWidth: 2, stroke: '#fff' }}
//             activeDot={{ r: 8 }}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default LineChartpg4;

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: '2016', value: 0 },
  { month: '2017', value: 25000 },
  { month: '2018', value: 17000 },
  { month: '2019', value: 39000 },
  { month: '2020', value: 21000 },
  { month: '2021', value: 29000 },
  { month: '2022', value: 30000 },
];

const LineChartpg4 = () => {
  return (
    <div style={{
      width: '100%',
      maxWidth: '600px',
     
      
      backgroundColor: 'white',
      borderRadius: '20px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <ResponsiveContainer width="100%" height={285}>
        <LineChart data={data} margin={{ top: 25, right: 30, left: 5, bottom: 8 }}>
          <CartesianGrid 
            strokeDasharray="3 3" // Dashed lines for background grid
            stroke="#ddd" // Light gray color for subtlety
          />
          <XAxis 
            dataKey="month" 
            tick={{ fill: '#718EBF', fontSize: 12 }} 
            axisLine={{ stroke: '#ddd' }}
            tickLine={false}
          />
          <YAxis
            domain={[0, 40000]} // adjust range
            tickFormatter={(value) => value.toLocaleString()} // adds commas, e.g. 25,000
            tick={{ fill: '#718EBF', fontSize: 12, fontWeight: 500 }}
            axisLine={{ stroke: '#ddd' }}
            tickLine={true}
          />

          <Tooltip 
            formatter={(value) => `${value}`}
          />
          <Line 
            type="linear" 
            dataKey="value" 
            stroke="#FCAA0B" 
            strokeWidth={3} 
            dot={{ fill: '#FCAA0B', r: 6, strokeWidth: 2, stroke: '#fff' }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartpg4;



