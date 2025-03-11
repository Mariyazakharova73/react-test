import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const StyledBox = styled(Box)`
  border-bottom: 1px solid ${({ theme }) => theme.palette.info.main};
`;

export const StyledTypography = styled(Typography)`
  font-size: 18px;
  padding: 0px 15px 26px 15px;
`;
