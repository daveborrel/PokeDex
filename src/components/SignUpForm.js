import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Typography } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';

/**
 * Representation of the Sign Up Box for Users to Enter Relevant Information.
 */
export default function RegistrationForm() {
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
        Sign Up
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Register Here</DialogTitle>
        <DialogContent>
          <Typography>Email Address</Typography>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="email"
            fullWidth
            variant="standard"
          />
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
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Sign Up</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}