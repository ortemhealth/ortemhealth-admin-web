import React, { useEffect, useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import { getAppointments } from '../services/appointment';

export default function AppointmentTable() {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    getAppointments().then(setAppointments);
  }, []);
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Patient</TableCell>
            <TableCell>Doctor</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map(appt => (
            <TableRow key={appt.id}>
              <TableCell>{appt.patientName}</TableCell>
              <TableCell>{appt.doctorName}</TableCell>
              <TableCell>{appt.time}</TableCell>
              <TableCell>{appt.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

