import { Box, Drawer, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { DRAWER_WIDTH } from 'src/utils/constants';

export const StyledTypographyTitle = styled(Typography)`
  font-size: 14px;
`;

export const StyledTypography = styled(Typography)`
  font-size: 10px;
`;

export const StyledStack = styled(Stack)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledBox = styled(Box)`
  padding: 0 0 8px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.info.main};
`;

export const StyledDrawer = styled(Drawer)`
  & .MuiDrawer-paper {
    box-sizing: border-box;
    width: ${DRAWER_WIDTH}px;
    border-right: 1px solid ${({ theme }) => theme.palette.info.main};
  }
`;
