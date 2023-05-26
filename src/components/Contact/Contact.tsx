import { Box, Typography, SvgIcon } from '@mui/material';
import mailIcon from '@assets/img/mail.svg';
import phoneIcon from '@assets/img/phone.svg';
import countryIcon from '@assets/img/country.svg';

const Contact = () => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant='h6'>Contact</Typography>
      <Box display="flex" flexDirection="column" gap={1} pl={1}>
        <Box display="flex" gap={1.5}>
          <img width={20} src={countryIcon} />
          <Typography>Taipei City, Taiwan</Typography>
        </Box>
        <Box display="flex" gap={1.5}>
          <img width={20} src={phoneIcon} />
          <Typography>+886 923926326</Typography>
        </Box>
        <Box display="flex" gap={1.5}>
          <img width={20} src={mailIcon} />
          <Typography>tonytonitone6@gmail.com</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Contact;