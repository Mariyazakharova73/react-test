import { AppBar, IconButton, Tab, Tabs, Toolbar } from '@mui/material';
import { styled } from '@mui/system';
import { DRAWER_WIDTH } from '../../utils/constants';

export const StyledTabs = styled(Tabs)(({ theme }) => ({
  '.MuiTabs-indicator': {
    backgroundColor: theme.palette.secondary.main,
    height: '2px',
  },
}));

export const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  padding: 0,
  marginRight: theme.spacing(3.5),
  minWidth: 73,
}));

export const CustomToolbar = styled(Toolbar)`
  min-height: 44px !important;
  height: 44px !important;
`;

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderBottom: '1px solid',
  borderColor: theme.palette.info.main,
  boxShadow: 'none',
  zIndex: 1300,
  [theme.breakpoints.up('md')]: {
    marginLeft: DRAWER_WIDTH,
  },
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));
