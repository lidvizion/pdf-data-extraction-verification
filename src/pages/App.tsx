import React, { useRef, useState } from 'react';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import { OcrTextDetection } from '@lid-vizion/document-intelligence';
import { RootStoreProvider as DocIntelligenceProvider } from "@lid-vizion/document-intelligence";
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function App() {  
  return (
    <DocIntelligenceProvider>
      <Box 
        minHeight="100vh"
        width="100vw"
        sx={{ 
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CssBaseline />
        <Header/>
        <Toolbar/>
        <Box 
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            bgcolor: "#F5F1ED"
          }}
        >
          <OcrTextDetection showSidebar={true} />
        </Box>
        <Footer/>
      </Box>
    </DocIntelligenceProvider>
  );
}
