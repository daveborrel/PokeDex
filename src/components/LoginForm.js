import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Typography } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';

/**
 * Users should be able to login with their respective information.
 */
export default function LoginForm() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <Typography>Username</Typography>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="userName"
            fullWidth
            variant="standard"
          />
          <Typography>Password</Typography>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="passWord"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Log In</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
