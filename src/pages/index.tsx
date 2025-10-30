import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material";

const defaultTheme = createTheme(); // MUI default theme

export default function HomePage() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  );
}