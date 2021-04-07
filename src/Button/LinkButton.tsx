import { Grid, Theme, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Link, Route, Switch } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    margin: theme.spacing(2),
  },
}));

export const LinkButton = () => {
  const styles = useStyles();
  return (
    <Grid container direction="column" className={styles.container}>
      <Grid item>
        <Grid container>
          <Grid item>
            <Button component={Link} to="/">
              Home
            </Button>
          </Grid>
          <Grid item>
            <Button component={Link} to="/page1">
              Page 1
            </Button>
          </Grid>
          <Grid item>
            <Button component={Link} to="/page2">
              Page 2
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item spacing={2}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Typography variant="h6">Home content</Typography>}
          />
          <Route
            path="/page1"
            render={() => <Typography variant="h6">Page 1 content</Typography>}
          />
          <Route
            path="/page2"
            render={() => <Typography variant="h6">Page 2 content</Typography>}
          />
        </Switch>
      </Grid>
    </Grid>
  );
};
