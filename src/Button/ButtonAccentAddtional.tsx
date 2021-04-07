import {
  AppBar,
  Button,
  Grid,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";

export const ButtonAccentAdditional = () => {
  return (
    <AppBar color="primary">
      <Toolbar>
        <Grid container spacing={2}>
          <Grid item>
            <Button color="secondary" variant="text">
              Text
            </Button>
          </Grid>
          <Grid item>
            <Button color="secondary" variant="outlined">
              Text
            </Button>
          </Grid>
          <Grid item>
            <Button color="secondary" variant="contained">
              Text
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
