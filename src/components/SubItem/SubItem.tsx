import type { TypographyProps } from '@mui/material';
import { ReactNode } from 'react';
import { Typography, Box } from '@mui/material';
import styled from '@emotion/styled';

import type { JobDescriptionType } from '../Experience/types';

const StyledTypo = styled(Typography) <TypographyProps>`
  font-size: ${props => props.fontSize ? `${props.fontSize}` : '12px'}
`;

type SubItemProps = Omit<JobDescriptionType, 'descList'> & { renderNode?: () => ReactNode }

const SubItem = ({ jobTitle, name, date, renderNode }: SubItemProps) => {
  return (
    <Box marginBottom={2}>
      <Box display="flex" gap={1} alignItems="center">
        <StyledTypo fontSize="16px" fontWeight={800}>{name}</StyledTypo>
        -
        <Typography fontSize="16px" fontWeight={800}>{jobTitle}</Typography>
      </Box>
      <Box display="flex" gap={1}>
        <StyledTypo color="gray" fontStyle="italic">{date.from}</StyledTypo>
        -
        <StyledTypo color="gray" fontStyle="italic">{date.to}</StyledTypo>
      </Box>
      {renderNode && renderNode()}
    </Box>
  )
}

export default SubItem;