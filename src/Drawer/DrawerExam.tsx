import {
  Button,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Theme,
  Typography,
} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import WebIcon from "@material-ui/icons/Web";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    alignContent: {
      alignSelf: "center",
    },
  })
);

export const DrawItemNavigation = () => {
  const [open, setOpen] = useState<boolean>(false);
  const classes = useStyles();
  return (
    <Grid container justify="space-between">
      <Grid item className={classes.alignContent}>
        <Route exact path="/" render={() => <Typography>Home</Typography>} />
      </Grid>
      <Grid item className={classes.alignContent}>
        <Route
          exact
          path="/page2"
          render={() => <Typography>Page2</Typography>}
        />
      </Grid>
      <Grid item className={classes.alignContent}>
        <Route
          exact
          path="/page3"
          render={() => <Typography>Page3</Typography>}
        />
      </Grid>
      <Grid item>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <List>
            <ListItem component={Link} to="/" onClick={() => setOpen(false)}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
          </List>
          <List>
            <ListItem
              component={Link}
              to="/page2"
              onClick={() => setOpen(false)}
            >
              <ListItemIcon>
                <WebIcon />
              </ListItemIcon>
              <ListItemText>Page2</ListItemText>
            </ListItem>
          </List>
          <List>
            <ListItem
              component={Link}
              to="/page3"
              onClick={() => setOpen(false)}
            >
              <ListItemIcon>
                <WebIcon />
              </ListItemIcon>
              <ListItemText>Page3</ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </Grid>
      <Grid item>
        <Button onClick={() => setOpen(!open)}>
          {open ? "Hide" : "Show"} Drawer
        </Button>
      </Grid>
    </Grid>
  );
};
