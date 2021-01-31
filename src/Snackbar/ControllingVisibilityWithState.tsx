import { Button, Snackbar } from "@material-ui/core";
import React, { useState } from "react";

export const ControllingVisibilityWithState = () => {
  const [open, setOpen] = useState<boolean>(false);

  const showSnackBar = () => {
    setOpen(true);
  };
  const hiddenSnackBar = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={showSnackBar}>
        Show Snackbar
      </Button>
      <Snackbar
        open={open}
        onClose={hiddenSnackBar}
        autoHideDuration={5000}
        message="Visible snackbar!"
      />
    </>
  );
};
