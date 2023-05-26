import { Box, Typography } from '@mui/material';

import SubItem from '../SubItem/SubItem';
import type { JobDescriptionType } from './types';
import { experienceList } from './spec';

const Experience = () => {
  function renderSubItem(item: JobDescriptionType) {
    const { descList, ...rest } = item;

    function renderItem(desc: string) {
      return (
        <Typography key={desc} component="li" padding="1px 0">
          <Typography key={desc} fontSize="0.85rem" fontWeight={500}>
            {desc}
          </Typography>
        </Typography>
      );
    }

    return (
      <SubItem
        key={item.name}
        {...rest}
        renderNode={() => (
          <Box mt={1}>
            <Typography component="ul" margin={0} pl="20px">{descList.map(renderItem)}</Typography>
          </Box>
        )}
      />
    );
  }

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant="h6">Work Experience</Typography>
      {experienceList.map(renderSubItem)}
    </Box>
  );
};

export default Experience;
