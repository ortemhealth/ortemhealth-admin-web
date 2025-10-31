import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import PatientCard from '../components/PatientCard';
import { Box, Typography, Grid, Button, Modal, TextField } from '@mui/material';
import { getPatients, addPatient } from '../services/patient';

export default function PatientsPage() {
  const [patients, setPatients] = useState([]);
  const [open, setOpen] = useState(false);
  const [newPatient, setNewPatient] = useState({ name: '', dob: '', email: '' });

  useEffect(() => {
    getPatients().then(setPatients);
  }, []);

  const handleAdd = async () => {
    await addPatient(newPatient);
    setPatients([...patients, newPatient]);
    setOpen(false);
    setNewPatient({ name: '', dob: '', email: '' });
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, bgcolor: '#f9f9f9', minHeight: '100vh' }}>
        <Navbar />
        <Box sx={{ p: 4 }}>
          <Typography variant="h5" mb={3}>Patients</Typography>
          <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
            + Add Patient
          </Button>
          <Grid container spacing={3} mt={1}>
            {patients.map(p =>
              <Grid item xs={12} sm={6} md={4} key={p.id}>
                <PatientCard patient={p} />
              </Grid>
            )}
          </Grid>
          <Modal open={open} onClose={() => setOpen(false)}>
            <Box sx={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)', bgcolor: 'background.paper',
              boxShadow: 24, p: 4, borderRadius: 2, minWidth: 320
            }}>
              <Typography variant="h6" mb={2}>Add Patient</Typography>
              <TextField fullWidth label="Name" sx={{ mb: 2 }} value={newPatient.name} onChange={e => setNewPatient({...newPatient, name: e.target.value})}/>
              <TextField fullWidth label="DOB" sx={{ mb: 2 }} value={newPatient.dob} onChange={e => setNewPatient({...newPatient, dob: e.target.value})}/>
              <TextField fullWidth label="Email" sx={{ mb: 2 }} value={newPatient.email} onChange={e => setNewPatient({...newPatient, email: e.target.value})}/>
              <Button variant="contained" onClick={handleAdd} fullWidth>Add</Button>
            </Box>
          </Modal>
        </Box>
      </Box>
    </Box>
  );
}

