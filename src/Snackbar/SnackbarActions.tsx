import { Button, IconButton, Snackbar, Typography } from "@material-ui/core";
import React, { useState } from "react";

import CloseIcon from "@material-ui/icons/Close";
import { Link, Route } from "react-router-dom";

export const SnackbarActions = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Route
        exact
        path="/"
        render={() => (
          <Button onClick={() => setOpen(true)}>Create Thing</Button>
        )}
      />
      <Route
        exact
        path="/thing"
        render={() => <Typography>The Thing</Typography>}
      />

      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        message="Finished creating thing"
        action={[
          <Button
            color="secondary"
            component={Link}
            to="/thing"
            onClick={() => setOpen(false)}
          >
            The Thing
          </Button>,
          <IconButton color="inherit" onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </>
  );
};
