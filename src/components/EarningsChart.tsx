import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'May', earnings: 4000 },
  { month: 'Jun', earnings: 7000 },
  { month: 'Jul', earnings: 5000 },
  { month: 'Aug', earnings: 4500 },
  { month: 'Sep', earnings: 8000 },
  { month: 'Oct', earnings: 6500 },
];

export default function EarningsChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="earnings" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

