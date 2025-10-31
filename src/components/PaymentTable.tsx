import React, { useEffect, useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, Chip, IconButton } from '@mui/material';
import { getPayments, refundPayment } from '../services/payment';

export default function PaymentTable() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    getPayments().then(setPayments);
  }, []);

  const handleRefund = async (id: string) => {
    await refundPayment(id);
    setPayments(payments.map(p => p.id === id ? { ...p, status: "Refunded" } : p));
  };

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Patient</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Method</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {payments.map(payment => (
            <TableRow key={payment.id}>
              <TableCell>{payment.id}</TableCell>
              <TableCell>{payment.patientName}</TableCell>
              <TableCell>₹{payment.amount}</TableCell>
              <TableCell>{payment.date}</TableCell>
              <TableCell>
                <Chip label={payment.status} color={payment.status === "Paid" ? "success" : "warning"} />
              </TableCell>
              <TableCell>{payment.method}</TableCell>
              <TableCell>
                {payment.status === "Paid" && (
                  <IconButton color="secondary" onClick={() => handleRefund(payment.id)}>
                    Refund
                  </IconButton>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

