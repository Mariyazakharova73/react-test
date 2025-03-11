import DashboardIcon from '@mui/icons-material/Dashboard';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';

import { FC, useState } from 'react';
import { DRAWER_WIDTH, SIDEBAR_LIST } from 'src/utils/constants';
import { StyledBox, StyledStack, StyledTypography, StyledTypographyTitle } from './SideBar.style';

export interface SidebarProps {
  mobileOpen: boolean;
  handleDrawerTransitionEnd: () => void;
  closeDrawer: () => void;
}

export const SideBar: FC<SidebarProps> = ({ mobileOpen, handleDrawerTransitionEnd, closeDrawer }) => {
  const [open, setOpen] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number | null>(4);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  const toggleList = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const drawer = (
    <div>
      <Toolbar />

      <StyledBox>
        <StyledStack>
          <div>
            <StyledTypographyTitle
              color="textSecondary"
              variant="body1"
            >
              Название проекта
            </StyledTypographyTitle>
            <StyledTypography color="textSecondary">Аббревиатура</StyledTypography>
          </div>

          <IconButton onClick={toggleList}>
            {open ? <ExpandMoreIcon color="info" /> : <ExpandLessIcon color="info" />}
          </IconButton>
        </StyledStack>
      </StyledBox>

      <Divider />

      {open && (
        <List>
          {SIDEBAR_LIST.map((text, index) => (
            <ListItem
              key={text}
              disablePadding
            >
              <ListItemButton
                onClick={() => handleClick(index)}
                selected={activeIndex === index}
              >
                <ListItemIcon>
                  <DashboardIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { md: DRAWER_WIDTH }, flexShrink: { md: 0 } }}
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={closeDrawer}
        sx={{
          display: { sm: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: DRAWER_WIDTH,
            borderRight: '1px solid #414144',
          },
        }}
        slotProps={{
          root: {
            keepMounted: true,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: DRAWER_WIDTH,
            borderRight: '1px solid #414144',
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};
