import { Box, Typography, SvgIcon } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import ContactPhone from '@mui/icons-material/ContactPhone';
import MailIcon from '@mui/icons-material/MailOutline';

const Contact = () => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant='h6'>Contact</Typography>
      <Box display="flex" flexDirection="column" gap={1} pl={1}>
        <Box display="flex" gap={1.5}>
          <PublicIcon />
          <Typography>Taipei City, Taiwan</Typography>
        </Box>
        <Box display="flex" gap={1.5}>
          <ContactPhone />
          <Typography>+886 923926326</Typography>
        </Box>
        <Box display="flex" gap={1.5}>
          <MailIcon />
          <Typography>tonytonitone6@gmail.com</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Contact;