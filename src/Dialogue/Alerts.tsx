import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Theme,
} from "@material-ui/core";
import { Check, Warning } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  iconRight: {
    marginLeft: theme.spacing(1),
  },
}));

export const Alerts = () => {
  const [open, setOpen] = useState(false);

  const onShowConfirm = () => {
    setOpen(true);
  };

  const onConfirm = () => {
    setOpen(false);
  };
  const styles = useStyles();

  return (
    <>
      <Button color="primary" onClick={onShowConfirm}>
        Show alert
      </Button>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="xs"
        open={open}
      >
        <DialogContent>
          <Grid container>
            <Grid item xs={2}>
              <Warning fontSize="large" color="secondary" />
            </Grid>
            <Grid item xs={10}>
              <DialogContentText>
                Disk space critically low. You won't be able to perform any
                actions until you free up some space by deleting assets.
              </DialogContentText>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={onConfirm} color="primary">
            Got it
            <Check className={styles.iconRight} />
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
