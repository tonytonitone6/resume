import { Box } from '@mui/material';
import Header from "./components/Header/Header";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Teaching from './components/Teaching/Teaching';
import Skills from './components/Skill/Skill';

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

const App = () => {
  const [profile] = useState({
    name: 'Stan Mao',
    jobTitle: 'Senior Frontend Developer',
  })
  // display="flex" flexDirection="column" alignItems="center"
  return (
    <Box width="calc(1200px - 5rem)" margin="0 auto" pt={5}>
      <Box display="flex" flexDirection="column" gap={3}>
        <Header {...profile} />
        <Box display="flex" width={1} alignItems="flex-start" justifyContent="space-between" gap={5}>
          <Box display="flex" justifyContent="center">
            <Experience />
          </Box>
          <Box gap={5} display="flex" flexDirection="column" justifyContent="center" width="350px">
            <Skills />
            <Teaching />
            <Education />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default App;