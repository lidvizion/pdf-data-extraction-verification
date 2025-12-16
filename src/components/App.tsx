import React, { useRef, useState } from 'react';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import { DocumentSearch, OcrTextDetection } from '@lid-vizion/document-intelligence';
import Header from './Header';
import Footer from './Footer';
import { RootStoreProvider as DocIntelligenceProvider } from "@lid-vizion/document-intelligence";

interface DocIntelligenceFeature {
  id: string;
  name: string;
  component: typeof OcrTextDetection | typeof DocumentSearch;
}

export const features: DocIntelligenceFeature[] = [
  {
    name: "OCR Text Detection",
    id: "text_detection",
    component: OcrTextDetection,
  },
  {
    id: "document_search",
    name: "Document Search",
    component: DocumentSearch,
  }
]

export default function App() {
  const [ selectedFeatureIdx, setSelectedFeatureIdx ] = useState(0); 

  const FeatureComponent = features[selectedFeatureIdx].component

  return (
    <Box 
      minHeight="100vh"
      width="100vw"
      sx={{ 
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CssBaseline />
      <Header selectedFeatureIdx={selectedFeatureIdx} setSelectedFeatureIdx={setSelectedFeatureIdx}/>
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
        <FeatureComponent showSidebar={true} />
      </Box>
      <Footer/>
    </Box>
  );
}
