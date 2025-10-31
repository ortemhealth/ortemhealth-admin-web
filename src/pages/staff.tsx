import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableHead, TableRow, Button, Modal, TextField, MenuItem } from '@mui/material';
import { getStaff, addStaff, updateStaffRole, removeStaff } from '../services/staff';

const emptyMember = { name: '', email: '', role: 'Staff' };

export default function StaffPage() {
  const [staff, setStaff] = useState([]);
  const [open, setOpen] = useState(false);
  const [newMember, setNewMember] = useState(emptyMember);

  useEffect(() => {
    getStaff().then(setStaff);
  }, []);

  const handleAdd = async () => {
    await addStaff(newMember);
    setStaff([...staff, newMember]);
    setOpen(false);
    setNewMember(emptyMember);
  };

  const handleRoleChange = async (id: string, role: string) => {
    await updateStaffRole(id, role);
    setStaff(staff.map(m => m.id === id ? { ...m, role } : m));
  };

  const handleRemove = async (id: string) => {
    await removeStaff(id);
    setStaff(staff.filter(m => m.id !== id));
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, bgcolor: '#f9f9f9', minHeight: '100vh' }}>
        <Navbar />
        <Box sx={{ p: 4 }}>
          <Typography variant="h5" mb={3}>Clinic Staff & Team</Typography>
          <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
            + Add Staff Member
          </Button>
          <Box mt={3}>
            <Paper>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {staff.map(member => (
                    <TableRow key={member.id}>
                      <TableCell>{member.name}</TableCell>
                      <TableCell>{member.email}</TableCell>
                      <TableCell>
                        <TextField
                          select
                          value={member.role}
                          onChange={e => handleRoleChange(member.id, e.target.value)}
                          size="small"
                        >
                          <MenuItem value="Admin">Admin</MenuItem>
                          <MenuItem value="Doctor">Doctor</MenuItem>
                          <MenuItem value="Receptionist">Receptionist</MenuItem>
                          <MenuItem value="Staff">Staff</MenuItem>
                        </TextField>
                      </TableCell>
                      <TableCell>
                        <Button onClick={() => handleRemove(member.id)} color="error">Remove</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Box>
          <Modal open={open} onClose={() => setOpen(false)}>
            <Box sx={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)', bgcolor: 'background.paper',
              boxShadow: 24, p: 4, borderRadius: 2, minWidth: 320
            }}>
              <Typography variant="h6" mb={2}>Add New Staff Member</Typography>
              <TextField
                fullWidth label="Name" sx={{ mb: 2 }}
                value={newMember.name} onChange={e => setNewMember({...newMember, name: e.target.value})}
              />
              <TextField
                fullWidth label="Email" sx={{ mb: 2 }}
                value={newMember.email} onChange={e => setNewMember({...newMember, email: e.target.value})}
              />
              <TextField
                select fullWidth label="Role" sx={{ mb: 2 }}
                value={newMember.role}
                onChange={e => setNewMember({...newMember, role: e.target.value})}
              >
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Receptionist">Receptionist</MenuItem>
                <MenuItem value="Staff">Staff</MenuItem>
              </TextField>
              <Button variant="contained" onClick={handleAdd} fullWidth>
                Add
              </Button>
            </Box>
          </Modal>
        </Box>
      </Box>
    </Box>
  );
}
