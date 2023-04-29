import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';

const StyledUl = styled('ul')`
  margin: 0;
  padding-left: 20px;
`;

const StyledLi = styled('li')`
  padding: 1px 0;
  margin-bottom: 5px;
`;

const Teaching = () => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant='h6'>TEACHING EXPERIENCE</Typography>
      <StyledUl>
        <StyledLi>Recoil and Jotai workshop</StyledLi>
        <StyledLi>XState workshop</StyledLi>
      </StyledUl>
    </Box>
  )
}

export default Teaching;