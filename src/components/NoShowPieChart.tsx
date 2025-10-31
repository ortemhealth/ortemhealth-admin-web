import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'No-show', value: 81 },
  { name: 'Completed', value: 1261 },
];
const COLORS = ['#ff7b54', '#23289d'];

export default function NoShowPieChart() {
  return (
    <ResponsiveContainer width="100%" height={230}>
      <PieChart>
        <Pie
          data={data}
          innerRadius={50}
          outerRadius={80}
          dataKey="value"
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, i) => (<Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
