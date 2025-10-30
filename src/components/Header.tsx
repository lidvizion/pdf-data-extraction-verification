import { AppBar, Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import { GitHub, OpenInNew } from '@mui/icons-material';
import LidVizionIcon from './LidVizionIcon';

export default function Header() {
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: '#fff',
        borderBottom: '1px solid #ececec',
        display: 'flex',
        flexDirection: 'row',
        height: "4rem",
        justifyContent: "center",
        zIndex: theme.zIndex.drawer + 1,
      }}
    >
      <Box
        sx={{
          maxWidth: "90rem",
          px: { xs: 2, sm: 3, lg: 4 },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {/* Left Section */}
        <Box display="flex" alignItems="center" gap={1.5}>
          <LidVizionIcon width={100} height={60}/>
          <Typography variant="caption" color="text.secondary">
            Document Intelligence Platform
          </Typography>
        </Box>

        {/* Right Section */}
        <Box display="flex" alignItems="center" gap={2}>
          {/* GitHub Button */}
          <IconButton
            href="https://github.com/lidvizion/pdf-data-extraction-verification"
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            color="default"
          >
            <GitHub fontSize="small" />
          </IconButton>

          {/* Book a Call Button */}
          <Button
            href="https://calendly.com/lidvizion-info/15"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            size="medium"
            sx={{
              borderRadius: "16px",
              textTransform: "none",
              display: "flex",
              alignItems: "center",
              gap: 1,
              backgroundColor: theme.palette.grey[900]
            }}
          >
            <span>Book a Call</span>
            <OpenInNew fontSize="small" />
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
};

