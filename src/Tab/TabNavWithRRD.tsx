import { AppBar, Tab, Tabs, Theme, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { Link, Route } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
    tabContet: {
      padding: theme.spacing(2),
    },
  })
);

export const TabNavWithRRD = () => {
  const classes = useStyles();
  const [value, setValue] = useState<number>(0);
  const onChange = (_: any, v: number) => {
    setValue(v);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={onChange}>
          <Tab label="Item One" component={Link} to="/" />
          <Tab label="Item Page 2" component={Link} to="/page2" />
          <Tab label="Item Page 3" component={Link} to="/page3" />
        </Tabs>
      </AppBar>
      <Route
        exact
        path="/"
        render={() => (
          <Typography component="div" className={classes.tabContet}>
            Item One
          </Typography>
        )}
      />
      <Route
        exact
        path="/page2"
        render={() => (
          <Typography component="div" className={classes.tabContet}>
            Page 2
          </Typography>
        )}
      />
      <Route
        exact
        path="/page3"
        render={() => (
          <Typography component="div" className={classes.tabContet}>
            Page 3
          </Typography>
        )}
      />
    </div>
  );
};
