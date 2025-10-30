import { Box, Typography, Container, Divider, useTheme } from "@mui/material";
import LidVizionIcon from "./LidVizionIcon";

export default function Footer() {
  const theme = useTheme();
  
  return (
    <Box
      component="footer"
      gap={2}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        borderTop: `1px solid ${theme.palette.divider}`,
        backgroundColor: "background.paper",
        py: 5,
        textAlign: "center",
      }}
    >
        {/* Logo and Title */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={1.5}
        >
          <LidVizionIcon width={100} height={60} />
          <Typography
            variant="h6"
            fontFamily="serif"
            fontWeight={600}
            color="text.primary"
          >
            Lid Vizion
          </Typography>
        </Box>

        {/* Description */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            maxWidth: "40rem",
            mx: "auto",
            lineHeight: 1.8,
          }}
        >
          Cross-platform starter kit for building advanced OCR and Document Intelligence applications. 
          Built with modern design principles and professional-grade components.
        </Typography>

        {/* Footer Bottom Text */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={2}
          color="text.secondary"
          fontSize="0.875rem"
        >
          <Typography variant="body2">© 2025 Lid Vizion</Typography>
          {/* Uncomment these if needed */}
          {/* <Typography variant="body2">•</Typography>
          <Typography variant="body2">MIT License</Typography>
          <Typography variant="body2">•</Typography>
          <Typography variant="body2">Made for developers</Typography> */}
        </Box>
    </Box>
  );
}
