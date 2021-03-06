import {
  AppBar,
  createStyles,
  Drawer,
  DrawerProps,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";

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
    toolbarMargin: theme.mixins.toolbar,
    aboveDrawer: {
      position: "relative",
      zIndex: 1400,
    },
  })
);

interface IMyToolbar {
  title: string;
  onMenuClick: any;
}

const MyToolbar: React.FC<IMyToolbar> = ({ title, onMenuClick }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.aboveDrawer}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={() => onMenuClick()}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.flex}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </>
  );
};

interface IMyDrawer {
  variant?: DrawerProps["variant"];
  open: boolean;
  drawer: boolean;
  setDrawer: React.Dispatch<boolean>;
  setTitle: React.Dispatch<string>;
}

const MyDrawer: React.FC<IMyDrawer> = ({
  variant,
  open,
  drawer,
  setDrawer,
  setTitle,
}) => {
  const classes = useStyles();
  const onClick = (title: string) => () => {
    setTitle(title);
    setDrawer(variant === "temporary" ? false : drawer);
  };
  return (
    <div>
      <Drawer variant={variant} open={open} onClose={() => setDrawer(false)}>
        <div
          className={clsx({
            [classes.toolbarMargin]: variant === "persistent",
          })}
        />
        <List>
          <ListItem button onClick={onClick("Home")}>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem button onClick={onClick("Page2")}>
            <ListItemText>Page2</ListItemText>
          </ListItem>
          <ListItem button onClick={onClick("Page3")}>
            <ListItemText>Page3</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export const DrawerNAppbar = () => {
  const classes = useStyles();
  const [drawer, setDrawer] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("Home");

  const toggleDrawer = () => setDrawer(!drawer);

  return (
    <div className={classes.root}>
      <MyToolbar title={title} onMenuClick={toggleDrawer} />
      <MyDrawer
        variant="persistent"
        open={drawer}
        setTitle={setTitle}
        drawer={drawer}
        setDrawer={setDrawer}
      />
    </div>
  );
};
