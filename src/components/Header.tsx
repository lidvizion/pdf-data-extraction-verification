import { AppBar, Box, Button, Chip, IconButton, Typography, useTheme } from '@mui/material';
import { GitHub, OpenInNew } from '@mui/icons-material';
import LidVizionIcon from './LidVizionIcon';
import { features } from './App';

type HeaderProps = {
  selectedFeatureIdx: number;
  setSelectedFeatureIdx: React.Dispatch<React.SetStateAction<number>>;
};

const Header: React.FC<HeaderProps> = ({ selectedFeatureIdx, setSelectedFeatureIdx }) => {
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

        <Box display="flex" alignItems="center" gap={2}>
          {features.map((feature, idx) => (
            <Chip
              key={feature.id}
              label={<Typography>{feature.name}</Typography>}
              onClick={() => setSelectedFeatureIdx(idx)}
              variant={selectedFeatureIdx === idx ? "filled" : "outlined"}
              color={selectedFeatureIdx === idx ? "primary" : "default"}
            />
          ))}
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

export default Header

