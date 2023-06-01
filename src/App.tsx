import { Box, Grid } from '@mui/material';
import Header from "./components/Header/Header";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Teaching from './components/Teaching/Teaching';
import Skills from './components/Skill/Skill';
import Contact from './components/Contact/Contact';

import { useState } from 'react';

// @ts-ignore
// const PagePathWithComponents = import.meta.glob('./pages/*.tsx', { eager: true });

// const routes = Object.keys(PagePathWithComponents).map((path: string) => {
//   const name = path.match(/\.\/pages\/(.*)\.tsx$/)![1];

//   return {
//     name,
//     path: name === 'Home' ? '/' : `/${name.toLowerCase()}`,
//     component: PagePathWithComponents[path].default,
//   }
// })

const skillList: Array<string> = [
  'JavaScript, TypeScript',
  'React/Hook',
  'React Native',
  'Styled-Components, Emotion',
  'React-Testing-Library',
  'Cypress',
  'Node, Nest/Express',
  'MongoDB',
  'Docker'
]

const App = () => {
  const [profile] = useState({
    name: 'Stan Mao',
    jobTitle: 'Senior Frontend Developer',
  })
  // display="flex" flexDirection="column" alignItems="center"
  return (
    <Grid maxWidth="calc(1000px - 5rem)" margin="0 auto">
      <Grid container display="flex" >
        <Grid item md={12} xs={12}>
          <Header {...profile} />
        </Grid>
        <Grid container display="flex" width={1} alignItems="flex-start" mt={2} pr={1}>
          <Grid item md={9} xs={12} display="flex" justifyContent="center">
            <Experience />
          </Grid>
          <Grid item md={3} xs={12}>
            <Grid gap={5} display="flex" flexDirection="column" justifyContent="center" width="350px">
              <Contact />
              <Skills stacks={skillList} />
              <Teaching />
              <Education />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default App;