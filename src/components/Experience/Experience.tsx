import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import type { TypographyProps } from '@mui/material';

import SubItem from '../SubItem/SubItem';
import type { JobDescriptionType } from './types';
import { experienceList } from './spec';

const StyledUl = styled('ul')`
  margin: 0;
  padding-left: 20px;
`;

const StyledLi = styled('li')`
  padding: 1px 0;
  font-size: 0.85rem;
`;

const StyledTypo = styled(Typography) <TypographyProps>`
  font-size: ${props => props.fontSize ? `${props.fontSize}px` : '12px'}
`;

const Experience = () => {
  function renderSubItem(item: JobDescriptionType) {
    const { descList, ...rest } = item;

    function renderItem(desc: string) {
      return (
        <StyledLi>
          <StyledTypo key={desc} fontSize="14px" fontWeight={500}>
            {desc}
          </StyledTypo>
        </StyledLi >
      );
    }

    return (
      <SubItem
        {...rest}
        renderNode={() => (
          <Box mt={1}>
            <StyledUl>{descList.map(renderItem)}</StyledUl>
          </Box>
        )}
      />
    );
  }

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant="h6">WORK EXPERIENCE</Typography>
      {experienceList.map(renderSubItem)}
    </Box>
  );
};

export default Experience;
