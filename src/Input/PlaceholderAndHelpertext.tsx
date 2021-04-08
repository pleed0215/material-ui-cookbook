import { Grid, makeStyles, TextField, Theme } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  container: { margin: theme.spacing(2) },
}));

export const PlaceholderAndHelperText = () => {
  const styles = useStyles();

  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");

  return (
    <Grid container spacing={4} className={styles.container}>
      <Grid item>
        <TextField
          id="first"
          label="First"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          id="second"
          label="Second"
          placeholder="Example value"
          value={second}
          onChange={(e) => setSecond(e.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          id="third"
          label="Third"
          value={third}
          helperText="Brief explanation of the value"
          onChange={(e) => setThird(e.target.value)}
        />
      </Grid>
    </Grid>
  );
};
