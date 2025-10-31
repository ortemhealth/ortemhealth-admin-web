import React from 'react';
import { Modal, Box, Typography, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  { q: "How do I add a doctor or staff member?", a: "Go to the Doctors or Staff section and click '+ Add'. Fill in the details and submit." },
  { q: "How can I book an appointment?", a: "Use the Appointments section and click '+ Book New Appointment'. Complete the form and submit." },
  { q: "How do I issue a payment refund?", a: "Go to Payments, find the transaction, and click 'Refund' next to it if eligible." },
  { q: "How do I view analytics?", a: "Visit Analytics from the sidebar. All key metrics and reports are available there." },
  { q: "How can I change my password or contact support?", a: "Use the Settings module for profile changes or Help for support options." },
];

export default function HelpModal({ open, handleClose }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: 2, minWidth: 350, maxWidth: '90%',
      }}>
        <Typography variant="h6" mb={2}>Help & FAQ</Typography>
        {faqs.map((faq, idx) => (
          <Accordion key={idx}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>{faq.q}</AccordionSummary>
            <AccordionDetails>{faq.a}</AccordionDetails>
          </Accordion>
        ))}
        <Button sx={{ mt: 2 }} variant="contained" onClick={handleClose}>Close</Button>
      </Box>
    </Modal>
  );
}

