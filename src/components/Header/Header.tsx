import AppsIcon from '@mui/icons-material/Apps';
import MenuIcon from '@mui/icons-material/Menu';
import ReplyIcon from '@mui/icons-material/Reply';
import { Stack } from '@mui/material';
import { FC, useState } from 'react';
import { TABS_DATA } from 'src/utils/constants';
import { CustomToolbar, StyledAppBar, StyledIconButton, StyledTab, StyledTabs } from './Header.style';

export interface HeaderProps {
  toggleDrawer: () => void;
}

export const Header: FC<HeaderProps> = ({ toggleDrawer }) => {
  const [value, setValue] = useState(0);
  return (
    <StyledAppBar position="fixed">
      <CustomToolbar>
        <StyledIconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </StyledIconButton>

        <Stack
          direction="row"
          spacing={4}
          alignItems="center"
        >
          <AppsIcon color="info" />
          <ReplyIcon color="info" />
          <StyledTabs
            value={value}
            onChange={(e, newValue) => setValue(newValue)}
            textColor="inherit"
          >
            {TABS_DATA.map((tab, index) => (
              <StyledTab
                key={tab.label}
                label={tab.label}
                disabled={tab.disabled}
              />
            ))}
          </StyledTabs>
        </Stack>
      </CustomToolbar>
    </StyledAppBar>
  );
};
