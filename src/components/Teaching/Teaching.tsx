import { Box, Typography } from '@mui/material';

const Teaching = () => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant='h6'>TEACHING EXPERIENCE</Typography>
      <Typography component="ul" pl="20px">
        <Typography component="li" mb={1}>Recoil and Jotai workshop</Typography>
        <Typography component="li">XState workshop</Typography>
      </Typography>
    </Box>
  )
}

export default Teaching;