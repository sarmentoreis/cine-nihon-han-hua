import { styled, Switch } from '@mui/material';
import { red } from '@mui/material/colors';

export const RegionSwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('/fan-icon.png')`,
        backgroundSize: '25px',
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: red[700],
        ...theme.applyStyles('dark', {
          backgroundColor: red[300],
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#ffffb7',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('/hat-icon.png')`,
      backgroundSize: '25px',
    },
    ...theme.applyStyles('dark', {
      backgroundColor: '#003892',
    }),
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#222',
    borderRadius: 20 / 2,
    ...theme.applyStyles('dark', {
      backgroundColor: '#8796A5',
    }),
  },
}));
