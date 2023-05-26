import { Typography, Box } from '@mui/material';

const Education = () => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant="h6">Education</Typography>
      <Box>
        <Typography fontSize="16px" fontWeight={800}>Information Management, <Typography component="a" color="inherit" target='__blank' href='https://new.ntpu.edu.tw/'>NTPU</Typography></Typography>
        <Typography variant='subtitle2'>Taiwan, Master's degree</Typography>
        <Typography color="gray" fontStyle="italic" variant='subtitle2'>2011 - 2014</Typography>
      </Box>
      <Box>
        <Typography fontSize="16px" fontWeight={800}>Information Management, <Typography component="a" color="inherit" target='__blank' href='https://www.pccu.edu.tw/intl/page/english/index.html'>PCCU</Typography></Typography>
        <Typography variant='subtitle2'>Taiwan, Bachelor's degree</Typography>
        <Typography color="gray" fontStyle="italic" variant='subtitle2'>2007 - 2011</Typography>
      </Box>
    </Box>
  )
}

export default Education;