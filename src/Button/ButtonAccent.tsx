import { Button, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    margin: theme.spacing(1),
  },
}));

export const ButtonAccent: React.FC<{ disabled: boolean }> = ({ disabled }) => {
  const styles = useStyles();
  return (
    <Grid container direction="column" spacing={2} className={styles.container}>
      <Grid item>
        <Typography variant="h6">Default</Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={2}>
          <Grid item>
            <Button variant="text" disabled={disabled}>
              Text
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" disabled={disabled}>
              Text
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" disabled={disabled}>
              Text
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Typography variant="h6">Primary</Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={2}>
          <Grid item>
            <Button variant="text" color="primary" disabled={disabled}>
              Text
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" disabled={disabled}>
              Text
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" disabled={disabled}>
              Text
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Typography variant="h6">Secondary</Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={2}>
          <Grid item>
            <Button variant="text" color="secondary" disabled={disabled}>
              Text
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="secondary" disabled={disabled}>
              Text
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" disabled={disabled}>
              Text
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
