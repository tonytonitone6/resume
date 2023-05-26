import { Box, Typography } from '@mui/material';

type SkillListProps = {
  stacks: Array<string>;
}

const Skill = ({ stacks }: SkillListProps) => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant='h6'>Skills</Typography>
      <Box width={1} display="flex" gap={1.5} flexWrap="wrap">
        <Typography component="ul" margin={0} pl="20px">
          {stacks.map(skill => <Typography key={skill} component="li" padding="1px 0">{skill}</Typography>)}
        </Typography>
      </Box>
    </Box>
  )
}

export default Skill;