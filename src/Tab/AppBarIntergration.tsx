import {
  AppBar,
  createStyles,
  makeStyles,
  Tab,
  Tabs,
  Theme,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
    tabContent: {
      padding: theme.spacing(2),
      backgroundColor: theme.palette.background.default,
      color: theme.palette.primary.main,
    },
  })
);

export const AppBarAndTabIntergration = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const onChange = (_: any, value: number) => {
    setValue(value);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={onChange} indicatorColor="primary">
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </AppBar>
      {value === 0 && (
        <Typography component="div" className={classes.tabContent}>
          Item One
        </Typography>
      )}
      {value === 1 && (
        <Typography component="div" className={classes.tabContent}>
          Item Two
        </Typography>
      )}
      {value === 2 && (
        <Typography component="div" className={classes.tabContent}>
          Item Three
        </Typography>
      )}
    </div>
  );
};
