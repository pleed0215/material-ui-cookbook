import {
  Button,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Theme,
  Typography,
} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import WebIcon from "@material-ui/icons/Web";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ShowChartIcon from "@material-ui/icons/ShowChart";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    alignContent: {
      alignSelf: "center",
    },
  })
);

interface Iitem {
  label: string;
  Icon: React.FC;
  hidden?: boolean;
  disabled?: boolean;
}

interface IListItem {
  items: Iitem[];
  onClick: any;
}

interface ISections {
  cpu: Iitem[];
  memory: Iitem[];
  storage: Iitem[];
  network: Iitem[];
}

const ListItems: React.FC<IListItem> = ({ items, onClick }) => {
  return (
    <>
      {items
        .filter(({ hidden }) => !hidden)
        .map(({ label, disabled, Icon }, i) => (
          <ListItem button key={i} disabled={disabled} onClick={onClick(label)}>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText>{label}</ListItemText>
          </ListItem>
        ))}
    </>
  );
};

export const DrawerSections = () => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);
  const [content, setContent] = useState<string>("Home");
  const [items] = useState<ISections>({
    cpu: [
      { label: "Add CPU", Icon: AddIcon },
      { label: "Remove CPU", Icon: RemoveIcon },
      { label: "Usage", Icon: ShowChartIcon },
    ],
    memory: [
      { label: "Add Memory", Icon: AddIcon },
      { label: "Usage", Icon: ShowChartIcon },
    ],
    storage: [
      { label: "Add Storage", Icon: AddIcon },
      { label: "Usage", Icon: ShowChartIcon },
    ],
    network: [
      { label: "Add Network", Icon: AddIcon, disabled: true },
      { label: "Usage", Icon: ShowChartIcon },
    ],
  });

  const onClick = (content: string) => () => {
    setOpen(false);
    setContent(content);
  };
  return (
    <Grid container justify="space-between">
      <Grid item className={classes.alignContent}>
        <Typography>{content}</Typography>
      </Grid>
      <Grid item>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <List>
            <ListSubheader>CPU</ListSubheader>
            <ListItems items={items.cpu} onClick={onClick} />
            <ListSubheader>Memory</ListSubheader>
            <ListItems items={items.memory} onClick={onClick} />
            <ListSubheader>Storage</ListSubheader>
            <ListItems items={items.storage} onClick={onClick} />
            <ListSubheader>Network</ListSubheader>
            <ListItems items={items.network} onClick={onClick} />
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
