import React from 'react';
import { Box, Button } from '@mui/material';

const FeedbackButton: React.FC = () => (
  <Box position="fixed" bottom={24} right={24}>
    <Button variant="contained" sx={{ bgcolor: 'black', color: 'white', borderRadius: 999, px: 4, py: 1.5, boxShadow: 3, '&:hover': { bgcolor: '#333' } }}>Feedback</Button>
  </Box>
);

export default FeedbackButton;
