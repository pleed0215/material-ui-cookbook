import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
  SnackbarCloseReason,
  TextField,
} from "@material-ui/core";
import React, { ChangeEventHandler, useState } from "react";

export const CollectingFormInput = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");

  const onDialogOpen = () => setDialogOpen(true);
  const onDialogClose = () => {
    setDialogOpen(false);
    setFirst("");
    setLast("");
    setEmail("");
  };
  const onSnackbarClose = (
    e: React.SyntheticEvent<any, Event>,
    reason: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
    setSnackbarMessage("");
  };

  const onCreate = () => {
    setSnackbarOpen(true);
    setSnackbarMessage(`${first} ${last} created`);
    onDialogClose();
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.name === "first") {
      setFirst(e.target.value);
    } else if (e.target.name === "last") {
      setLast(e.target.value);
    } else {
      setEmail(e.target.value);
    }
  };

  return (
    <>
      <Button color="primary" onClick={onDialogOpen}>
        New User
      </Button>
      <Dialog open={dialogOpen} onClose={onDialogClose}>
        <DialogTitle>New User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="normal"
            label="First Name"
            value={first}
            InputProps={{ name: "first" }}
            onChange={onChange}
            fullWidth
          />
          <TextField
            margin="normal"
            label="Last Name"
            value={last}
            InputProps={{ name: "last" }}
            onChange={onChange}
            fullWidth
          />
          <TextField
            margin="normal"
            label="Email"
            value={email}
            InputProps={{ name: "email" }}
            onChange={onChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onDialogClose} color="primary">
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={onCreate}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        message={snackbarMessage}
        onClose={onSnackbarClose}
        autoHideDuration={4000}
      />
    </>
  );
};
