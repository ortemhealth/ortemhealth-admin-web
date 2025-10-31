import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import DoctorCard from '../components/DoctorCard';
import { Box, Typography, Grid, Button, Modal, TextField } from '@mui/material';
import { getDoctors, addDoctor } from '../services/doctor';

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState([]);
  const [open, setOpen] = useState(false);
  const [newDoctor, setNewDoctor] = useState({ name: '', specialty: '', email: '' });

  useEffect(() => {
    getDoctors().then(setDoctors);
  }, []);

  const handleAdd = async () => {
    await addDoctor(newDoctor);
    setDoctors([...doctors, newDoctor]);
    setOpen(false);
    setNewDoctor({ name: '', specialty: '', email: '' });
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, bgcolor: '#f9f9f9', minHeight: '100vh' }}>
        <Navbar />
        <Box sx={{ p: 4 }}>
          <Typography variant="h5" mb={3}>Doctors</Typography>
          <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
            + Add Doctor
          </Button>
          <Grid container spacing={3} mt={1}>
            {doctors.map(doc =>
              <Grid item xs={12} sm={6} md={4} key={doc.id}>
                <DoctorCard doctor={doc} />
              </Grid>
            )}
          </Grid>
          <Modal open={open} onClose={() => setOpen(false)}>
            <Box sx={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)', bgcolor: 'background.paper',
              boxShadow: 24, p: 4, borderRadius: 2, minWidth: 320
            }}>
              <Typography variant="h6" mb={2}>Add Doctor</Typography>
              <TextField fullWidth label="Name" sx={{ mb: 2 }} value={newDoctor.name} onChange={e => setNewDoctor({...newDoctor, name: e.target.value})}/>
              <TextField fullWidth label="Specialty" sx={{ mb: 2 }} value={newDoctor.specialty} onChange={e => setNewDoctor({...newDoctor, specialty: e.target.value})}/>
              <TextField fullWidth label="Email" sx={{ mb: 2 }} value={newDoctor.email} onChange={e => setNewDoctor({...newDoctor, email: e.target.value})}/>
              <Button variant="contained" onClick={handleAdd} fullWidth>Add</Button>
            </Box>
          </Modal>
        </Box>
      </Box>
    </Box>
  );
}

