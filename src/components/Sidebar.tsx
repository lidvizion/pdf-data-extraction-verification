import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const Sidebar: React.FC = () => (
  <Paper elevation={0} sx={{ width: 320, borderRight: 1, borderColor: 'divider', p: 3, display: 'flex', flexDirection: 'column' }}>
    <Typography variant="h6" fontWeight={600} mb={1}>Documents</Typography>
    <Typography variant="body2" color="text.secondary" mb={2}>0 documents processed</Typography>
    <Box flex={1} display="flex" flexDirection="column" alignItems="center" justifyContent="center" color="text.disabled">
      <Typography>No documents yet</Typography>
      <Typography variant="caption" mt={1}>Upload a PDF to get started</Typography>
    </Box>
  </Paper>
);

export default Sidebar;
