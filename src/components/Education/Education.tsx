import { Typography, Box } from '@mui/material';
import type { TypographyProps } from '@mui/material';
import styled from '@emotion/styled';

const StyledTypo = styled(Typography) <TypographyProps>`
  font-size: ${props => props.fontSize ? `${props.fontSize}px` : '12px'}
`;

const StyledAnchor = styled('a')`
  color: inherit;
`;

const Education = () => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant="h6">EDUCATION</Typography>
      <Box>
        <StyledTypo fontSize="16px" fontWeight={800}>Information Management, <StyledAnchor target='__blank' href='https://new.ntpu.edu.tw/'>NTPU</StyledAnchor></StyledTypo>
        <Typography variant='subtitle2'>Taiwan, Master's degree</Typography>
        <Typography color="gray" fontStyle="italic" variant='subtitle2'>2011 - 2014</Typography>
      </Box>
      <Box>
        <StyledTypo fontSize="16px" fontWeight={800}>Information Management, <StyledAnchor target='__blank' href='https://www.pccu.edu.tw/intl/page/english/index.html'>PCCU</StyledAnchor></StyledTypo>
        <Typography variant='subtitle2'>Taiwan, Bachelor's degree</Typography>
        <Typography color="gray" fontStyle="italic" variant='subtitle2'>2007 - 2011</Typography>
      </Box>
    </Box>
  )
}

export default Education;