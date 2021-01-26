import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    activeListItem: {
      color: theme.palette.primary.main,
    },
    toolbarMargin: theme.mixins.toolbar,
  })
);

const MyMenus: React.FC = () => {
  return (
    <>
      <MenuItem component={Link} to="/">
        Home
      </MenuItem>
      <MenuItem component={Link} to="/page2">
        Page 2
      </MenuItem>
      <MenuItem component={Link} to="/page3">
        Page 3
      </MenuItem>
    </>
  );
};

const RightButton: React.FC = () => {
  return <Button color="inherit">Login</Button>;
};

interface IMenuWithNav {
  title: string;
}

export const MenuWithNav: React.FC<IMenuWithNav> = ({ title }) => {
  const classes = useStyles();
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);

  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={(e) => setAnchor(e.currentTarget)}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchor}
            open={Boolean(anchor)}
            onClose={() => setAnchor(null)}
          >
            <MyMenus />
          </Menu>
          <Typography variant="subtitle1">{title}</Typography>
          <RightButton />
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export const WithNavigation: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Route
        exact
        path="/"
        render={() => (
          <>
            <MenuWithNav title="Home" />
            <Typography>Home</Typography>
          </>
        )}
      />
      <Route
        exact
        path="/page2"
        render={() => (
          <>
            <MenuWithNav title="Page2" />
            <Typography>Page 2</Typography>
          </>
        )}
      />
      <Route
        exact
        path="/page3"
        render={() => (
          <>
            <MenuWithNav title="Page3" />
            <Typography>Page 3</Typography>
          </>
        )}
      />
    </div>
  );
};
