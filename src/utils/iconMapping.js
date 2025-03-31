import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import DevicesIcon from '@mui/icons-material/Devices';
import SpeedIcon from '@mui/icons-material/Speed';

// Map icon names to actual components
export const getIconComponent = (iconName) => {
  switch(iconName) {
    case 'WebIcon': return <WebIcon fontSize="large" />;
    case 'CodeIcon': return <CodeIcon fontSize="large" />;
    case 'DevicesIcon': return <DevicesIcon fontSize="large" />;
    case 'SpeedIcon': return <SpeedIcon fontSize="large" />;
    default: return null;
  }
};
