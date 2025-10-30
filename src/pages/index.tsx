import { RootStoreProvider as DocIntelligenceProvider } from "@lid-vizion/document-intelligence";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material";

const defaultTheme = createTheme(); // MUI default theme

export default function HomePage() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <DocIntelligenceProvider>
        <App />
      </DocIntelligenceProvider>
    </ThemeProvider>
  );
}