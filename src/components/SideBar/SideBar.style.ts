import { styled } from '@mui/system'
import { Box, Stack, Typography } from '@mui/material';


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
