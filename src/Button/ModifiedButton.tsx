import { Button, Grid, makeStyles, Theme } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    margin: theme.spacing(1),
  },
}));

export const ModifiedButton = () => {
  const styles = useStyles();
  return (
    <Grid container direction="column" spacing={2} className={styles.container}>
      <Grid item>
        <Button variant="text">Text</Button>
      </Grid>
      <Grid item>
        <Button variant="outlined">Outliend</Button>
      </Grid>
      <Grid item>
        <Button variant="contained">Contained</Button>
      </Grid>
    </Grid>
  );
};
