import type { TypographyProps } from '@mui/material';
import { ReactNode } from 'react';
import { Typography, Box } from '@mui/material';

import type { JobDescriptionType } from '../Experience/types';

type SubItemProps = Omit<JobDescriptionType, 'descList'> & { renderNode?: () => ReactNode }

const SubItem = ({ jobTitle, name, date, renderNode }: SubItemProps) => {
  return (
    <Box marginBottom={2}>
      <Box display="flex" gap={1} alignItems="center">
        <Typography fontSize="16px" fontWeight={800}>{name}</Typography>
        -
        <Typography fontSize="16px" fontWeight={800}>{jobTitle}</Typography>
      </Box>
      <Box display="flex" gap={1}>
        <Typography color="gray" fontStyle="italic">{date.from}</Typography>
        -
        <Typography color="gray" fontStyle="italic">{date.to}</Typography>
      </Box>
      {renderNode && renderNode()}
    </Box>
  )
}

export default SubItem;