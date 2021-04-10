import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import React, { useState } from "react";

export const ConfirmingActions = () => {
  const [open, setOpen] = useState(false);

  const onShowConfirm = () => {
    setOpen(true);
  };

  const onConfirm = () => {
    setOpen(false);
  };

  return (
    <>
      <Button color="primary" onClick={onShowConfirm}>
        Cnofirm Action
      </Button>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="xs"
        open={open}
      >
        <DialogTitle>Confirm Delete Asset</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete the asset? This action cannot be
            undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onConfirm} color="primary">
            Cancel
          </Button>
          <Button variant="contained" onClick={onConfirm} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
