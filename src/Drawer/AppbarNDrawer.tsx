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
      <AppBar>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={onMenuClick}
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
  onClose: any;
  setTitle: React.Dispatch<string>;
}

const MyDrawer: React.FC<IMyDrawer> = ({
  variant,
  open,
  onClose,
  setTitle,
}) => {
  const classes = useStyles();
  const onClick = (title: string) => () => {
    setTitle(title);
    onClose();
  };
  return (
    <Drawer variant={variant} open={open} onClose={onClose}>
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
      <MyDrawer open={drawer} setTitle={setTitle} onClose={toggleDrawer} />
    </div>
  );
};
