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
import { Link, Route, Switch } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import WebIcon from "@material-ui/icons/Web";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    alignContent: {
      alignSelf: "center",
    },
    root: {
      "&:active": {
        color: theme.palette.primary.main,
      },
    },
    activeListItem: {
      color: theme.palette.common.white,
      background: theme.palette.primary.main,
      padding: "5px",
    },
  })
);

interface INavListItem {
  Icon: React.FC;
  text: string;
  active?: boolean;
  to: string;
  onClick: any;
}

const NavListItem: React.FC<INavListItem> = ({
  Icon,
  text,
  active,
  ...other
}) => {
  const classes = useStyles();
  return (
    <ListItem component={Link} {...other}>
      <ListItemIcon
        classes={{ root: clsx({ [classes.activeListItem]: active }) }}
      >
        <Icon />
      </ListItemIcon>
      <ListItemText
        classes={{ primary: clsx({ [classes.activeListItem]: active }) }}
      >
        {text}
      </ListItemText>
    </ListItem>
  );
};

interface INavItem {
  to: string;
  Icon: React.FC;
  text: string;
  active?: boolean;
  onClick: any;
}

const NavItem: React.FC<INavItem> = (props) => (
  <Switch>
    <Route
      exact
      path={props.to}
      render={() => <NavListItem active={true} {...props} />}
    />
    <Route path="/" render={() => <NavListItem {...props} />} />
  </Switch>
);

export const DrawItemEmphasisNavigation = () => {
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
            <NavItem
              to="/"
              text="Home"
              Icon={HomeIcon}
              onClick={() => setOpen(false)}
            />
            <NavItem
              to="/page2"
              text="Page2"
              Icon={WebIcon}
              onClick={() => setOpen(false)}
            />
            <NavItem
              to="/page3"
              text="Page3"
              Icon={WebIcon}
              onClick={() => setOpen(false)}
            />
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
