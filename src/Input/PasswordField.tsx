import { Grid, TextField, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { ChangeEventHandler, useState } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  container: { margin: theme.spacing(2) },
}));

export const PasswordField = () => {
  const styles = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.id === "username") {
      setUsername(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <Grid container spacing={4} className={styles.container}>
      <Grid item>
        <TextField
          id="username"
          label="Username"
          autoComplete="username"
          InputProps={{ name: "username" }}
          value={username}
          onChange={onChange}
        />
      </Grid>
      <Grid item>
        <TextField
          id="password"
          label="Password"
          autoComplete="password"
          InputProps={{ name: "password" }}
          value={password}
          onChange={onChange}
        />
      </Grid>
    </Grid>
  );
};
