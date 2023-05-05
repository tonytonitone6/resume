import { Typography, Box, Grid } from '@mui/material';

type HeaderProps = {
  name: string;
  jobTitle: string;
}

const Header = ({
  name, jobTitle }: HeaderProps) => {
  return (
    <Grid container>
      <Grid item xs display="flex" flexDirection="column" zeroMinWidth gap={2}>
        <Typography variant='h1' fontSize="2.5rem">{name}</Typography>
        <Typography variant='h2' color="gray" fontSize="1.3rem">{jobTitle}</Typography>
        <Typography style={{ wordWrap: 'break-word' }}>
          Hello I am Stan, I have been working as an engineer for six years. Three years on front-end, three years on back-end. I have been spending my spare time discovering
          and learning new techniques. I think It’s important to discuss with my co-workers about how to build better system architecture and use it on the official web
          application. Ideas sharing and team discussion play an essential part in the front-end technology. Researching the React landscape and its new trend will sure benefit
          our team.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Header;