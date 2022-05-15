import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import SideOptionsbar from './SideOptionsbar';


// Represents the Navigation bar at the top which will be able to store the user's data in the future.
export default function NavigationBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <SideOptionsbar />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PokeDex and Pokemon Team Builder
          </Typography>
          <SignUpForm />
          <LoginForm />
        </Toolbar>
      </AppBar>
    </Box>
  );
}