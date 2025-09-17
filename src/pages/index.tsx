
import React, { useRef, useState } from 'react';
import { Box, Typography, Paper, Button, Modal, Backdrop, Fade } from '@mui/material';

const fontFamily = `'Inter', 'Segoe UI', 'Arial', sans-serif`;

export default function Home() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSelectPDF = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleFeedbackOpen = () => {
    setFeedbackOpen(true);
    setFeedbackSubmitted(false);
    setFeedbackText('');
  };
  const handleFeedbackClose = () => setFeedbackOpen(false);
  const handleFeedbackChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFeedbackText(e.target.value);
  };
  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackSubmitted(true);
    // Here you could send feedbackText to a backend if needed
  };

  return (
    <Box minHeight="100vh" bgcolor="#fafbfc" sx={{ fontFamily, overflow: 'hidden' }}>
      {/* Top Navbar */}
      <Box component="nav" sx={{ position: 'fixed', top: 0, left: 0, right: 0, height: 72, bgcolor: '#fff', borderBottom: '1px solid #ececec', px: 5, display: 'flex', alignItems: 'center', zIndex: 1100, overflow: 'hidden' }}>
        <Typography sx={{ fontWeight: 700, fontSize: 32, color: '#18181b', fontFamily }}>OCR API Demo</Typography>
      </Box>
      <Box sx={{ display: 'flex', pt: '72px', height: 'calc(100vh - 72px)', minHeight: 0, overflow: 'hidden' }}>
        {/* Sidebar */}
  <Box sx={{ width: 280, minWidth: 280, background: '#fff', borderRight: '1px solid #ececec', display: 'flex', flexDirection: 'column', height: '100%', boxSizing: 'border-box', overflow: 'hidden' }}>
          <Box sx={{ px: 5, pt: 5, pb: 2, overflow: 'hidden', borderBottom: '1px solid #ececec' }}>
            <Typography sx={{ fontWeight: 600, fontSize: 22, color: '#18181b', fontFamily }}>Documents</Typography>
            <Typography sx={{ color: '#6b7280', fontSize: 16, mt: 0.5, fontFamily }}>{uploadedFile ? '1 document processed' : '0 documents processed'}</Typography>
          </Box>
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', fontFamily, overflow: 'hidden' }}>
            {uploadedFile ? (
              <>
                <Typography sx={{ fontSize: 18, mb: 0.5, color: '#18181b', fontWeight: 500, fontFamily }}>{uploadedFile.name}</Typography>
                <Typography sx={{ fontSize: 14, color: '#6b7280', fontFamily }}>PDF uploaded successfully</Typography>
              </>
            ) : (
              <>
                <Typography sx={{ fontSize: 18, mb: 0.5, color: '#18181b', fontWeight: 500, fontFamily }}>No documents yet</Typography>
                <Typography sx={{ fontSize: 14, color: '#6b7280', fontFamily }}>Upload a PDF to get started</Typography>
              </>
            )}
          </Box>
        </Box>
        {/* Main Upload Area */}
        <Box sx={{ flex: 1, position: 'relative', background: 'transparent', overflow: 'hidden' }}>
          <Paper elevation={0} sx={{ position: 'absolute', top: 20, left: '50%', transform: 'translateX(-50%)', borderRadius: 4, background: '#fff', boxShadow: '0 2px 16px 0 rgba(0,0,0,0.07)', px: 0, py: 0, minWidth: 740, maxWidth: 740, minHeight: 360, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: 'none', fontFamily, overflow: 'hidden' }}>
            <Box sx={{ p: 4, width: '100%', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box sx={{ border: '2px dashed #d1d5db', borderRadius: 4, width: 820, height: 240, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mb: 0, background: '#fcfcfd', fontFamily, overflow: 'hidden' }}>
              <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8v8" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12l4-4 4 4" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Box>
              <Typography sx={{ fontWeight: 600, fontSize: 22, mb: 0.5, color: '#18181b', fontFamily, textAlign: 'center' }}>Upload PDF Document</Typography>
              <Typography sx={{ color: '#6b7280', fontSize: 16, mb: 2, fontFamily, textAlign: 'center' }}>Drag and drop your PDF here, or click to browse</Typography>
              <input
                type="file"
                accept="application/pdf"
                style={{ display: 'none' }}
                ref={fileInputRef}
                onChange={handleFileChange}
              />
              <Button variant="contained" sx={{ mt: 1, bgcolor: '#18181b', color: '#fff', fontWeight: 600, fontSize: 15, borderRadius: 2, px: 2.5, py: 0.8, minHeight: 36, boxShadow: 'none', textTransform: 'none', fontFamily, '&:hover': { bgcolor: '#222' } }} onClick={handleSelectPDF}>Select PDF</Button>
              <Typography sx={{ color: '#9ca3af', fontSize: 14, mt: 2, fontFamily, textAlign: 'center' }}>Maximum file size: 10MB</Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
      {/* Feedback Button with Correct Icon (smaller size) and modal */}
      <Box sx={{ position: 'fixed', bottom: 36, right: 36, zIndex: 1000 }}>
        <Button variant="contained" sx={{ bgcolor: '#18181b', color: '#fff', borderRadius: 999, px: 2.5, py: 0.8, fontWeight: 600, fontSize: 15, boxShadow: '0 2px 16px 0 rgba(0,0,0,0.18)', textTransform: 'none', fontFamily, display: 'flex', alignItems: 'center', gap: 1, minHeight: 36, '&:hover': { bgcolor: '#222' } }} onClick={handleFeedbackOpen}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ marginRight: 6 }} xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15.5a2.5 2.5 0 0 1-2.5 2.5H7l-4 4V6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v9Z" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/>
            <circle cx="8.5" cy="12" r="1.5" fill="#fff"/>
            <circle cx="12" cy="12" r="1.5" fill="#fff"/>
            <circle cx="15.5" cy="12" r="1.5" fill="#fff"/>
          </svg>
          Feedback
        </Button>
        <Modal
          open={feedbackOpen}
          onClose={handleFeedbackClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{ backdrop: { timeout: 500 } }}
        >
          <Fade in={feedbackOpen}>
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 340, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 24, p: 4, textAlign: 'center' }}>
              <Typography variant="h6" sx={{ mb: 2 }}>Feedback</Typography>
              {!feedbackSubmitted ? (
                <form onSubmit={handleFeedbackSubmit}>
                  <Typography sx={{ mb: 2 }}>Let us know your thoughts or issues:</Typography>
                  <Box sx={{ mb: 2 }}>
                    <textarea
                      value={feedbackText}
                      onChange={handleFeedbackChange}
                      rows={4}
                      style={{ width: '100%', padding: 8, fontFamily: 'inherit', fontSize: 15, borderRadius: 4, border: '1px solid #ececec', resize: 'none' }}
                      placeholder="Type your feedback here..."
                      required
                    />
                  </Box>
                  <Button type="submit" variant="contained" sx={{ mr: 1 }}>Submit</Button>
                  <Button variant="outlined" onClick={handleFeedbackClose}>Cancel</Button>
                </form>
              ) : (
                <>
                  <Typography sx={{ mb: 2 }}>Thank you for your feedback!</Typography>
                  <Button variant="contained" onClick={handleFeedbackClose}>Close</Button>
                </>
              )}
            </Box>
          </Fade>
        </Modal>
      </Box>
    </Box>
  );
}
