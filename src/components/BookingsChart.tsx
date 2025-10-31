import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'May', bookings: 140 },
  { month: 'Jun', bookings: 153 },
  { month: 'Jul', bookings: 126 },
  { month: 'Aug', bookings: 193 },
  { month: 'Sep', bookings: 218 },
  { month: 'Oct', bookings: 231 },
];

export default function BookingsChart() {
  return (
    <ResponsiveContainer width="100%" height={230}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="bookings" fill="#00A896" />
      </BarChart>
    </ResponsiveContainer>
  );
}
