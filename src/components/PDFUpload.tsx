import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';

const PDFUpload: React.FC = () => {
  return (
    <Paper elevation={3} sx={{ borderRadius: 3, p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', width: 600 }}>
      <Box sx={{ border: '2px dashed #e0e0e0', borderRadius: 2, width: '100%', height: 256, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
        <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: '#bdbdbd', marginBottom: 16 }} viewBox="0 0 24 24"><path d="M12 16v-8m0 0l-4 4m4-4l4 4"/></svg>
        <Typography fontWeight={600} fontSize={18}>Upload PDF Document</Typography>
        <Typography variant="body2" color="text.secondary" mb={1}>Drag and drop your PDF here, or click to browse</Typography>
        <Button variant="contained" sx={{ mt: 2, bgcolor: 'black', color: 'white', '&:hover': { bgcolor: '#333' } }}>Select PDF</Button>
        <Typography variant="caption" color="text.disabled" mt={2}>Maximum file size: 10MB</Typography>
      </Box>
    </Paper>
  );
};

export default PDFUpload;
