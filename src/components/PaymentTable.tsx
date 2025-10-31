import React, { useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, TableSortLabel, TablePagination, Paper, Button } from '@mui/material';
import { CSVLink } from "react-csv";
const tableData = [...] // fetched data

export default function PaymentTable() {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('amount');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleSort = (property) => { setOrder(order === 'asc' ? 'desc' : 'asc'); setOrderBy(property); };
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel active={orderBy === 'amount'} direction={order} onClick={() => handleSort('amount')}>
                Amount
              </TableSortLabel>
            </TableCell>
            {/* Add more TableCell with SortLabel as needed */}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Use filtered/sorted data */}
          {tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((payment) => (
            <TableRow key={payment.id}>
              <TableCell>{payment.amount}</TableCell>
              {/* More cells */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        count={tableData.length}
        page={page}
        onPageChange={(e, p) => setPage(p)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(e) => setRowsPerPage(Number(e.target.value))}
      />
      <Button sx={{ mt: 2 }}>
        <CSVLink data={tableData} filename="payments.csv">Export CSV</CSVLink>
      </Button>
    </Paper>
  );
}
