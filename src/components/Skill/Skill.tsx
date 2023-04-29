import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';

const StyledUl = styled('ul')`
  margin: 0;
  padding-left: 20px;
`;

const StyledLi = styled('li')`
  padding: 1px 0;
`;

type SkillListProps = {
  stacks?: Array<string>;
}

const skillList = ['react', 'styled-components', 'react-testing/library', 'typescript', 'graphql', 'node', 'postgresql', 'mongo', 'redis'];

const Skill = ({ stacks }: SkillListProps) => {

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant='h6'>SKILLS</Typography>
      <Box width={1} display="flex" gap={1.5} flexWrap="wrap">
        <StyledUl>
          <StyledLi>JavaScript, TypeScript</StyledLi>
          <StyledLi>Styled-components, Emotion</StyledLi>
          <StyledLi>React, Hook</StyledLi>
          <StyledLi>React-Testing-Library</StyledLi>
          <StyledLi>Node, Nest/Express</StyledLi>
          <StyledLi>Go</StyledLi>
          <StyledLi>MongoDB</StyledLi>
          <StyledLi>Docker</StyledLi>
        </StyledUl>
      </Box>
    </Box>
  )
}

export default Skill;