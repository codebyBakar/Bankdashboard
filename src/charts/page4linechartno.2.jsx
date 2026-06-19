import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: '2016', value: 10000 },
  { month: '2017', value: 20000 },
  { month: '2018', value: 10000 },
  { month: '2019', value: 32000 },
  { month: '2020', value: 21000 },
  { month: '2021', value: 29000 },
  { month: '2022', value: 18000 },
  { month: '2022', value: 35000 },

];

const LineChart2pg4 = () => {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '600px',
        backgroundColor: 'white',
        borderRadius: '20px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        fontFamily: 'Arial, sans-serif',
      
      }}
    >
     
      <ResponsiveContainer width="100%" height={285}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 8 }} // added left margin for Y-axis numbers
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          
          <XAxis
            dataKey="month"
            tick={{ fill: '#718EBF', fontSize: 12 }}
            axisLine={{ stroke: '#ddd' }}
            tickLine={false}
          />

          {/* ✅ Visible Y-Axis Numbers */}
          <YAxis
            domain={[0, 40000]} // adjust range
            tickFormatter={(value) => value.toLocaleString()} // adds commas, e.g. 25,000
            tick={{ fill: '#718EBF', fontSize: 12, fontWeight: 500 }}
            axisLine={{ stroke: '#ddd' }}
            tickLine={true}
          />

          <Tooltip formatter={(value) => value.toLocaleString()} />

          <Line
            type="monotone"
            dataKey="value"
            stroke="rgb(75, 192, 192)"
            strokeWidth={3}
            dot={false}
            activeDot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart2pg4;