import {
  Button,
  Collapse,
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
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import { setSyntheticTrailingComments } from "typescript";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    alignContent: {
      alignSelf: "center",
    },
    listSubheader: {
      padding: 0,
      minWidth: 0,
      color: "inherit",
      "&:hover": {
        background: theme.palette.background.default,
      },
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
  visible: boolean;
}

interface ISections {
  cpu: Iitem[];
  memory: Iitem[];
  storage: Iitem[];
  network: Iitem[];
}

interface IActiveSections {
  cpu: boolean;
  memory: boolean;
  storage: boolean;
  network: boolean;
}

const ListItems: React.FC<IListItem> = ({ items, onClick, visible }) => {
  return (
    <>
      <Collapse in={visible}>
        {items
          .filter(({ hidden }) => !hidden)
          .map(({ label, disabled, Icon }, i) => (
            <ListItem
              button
              key={i}
              disabled={disabled}
              onClick={onClick(label)}
            >
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText>{label}</ListItemText>
            </ListItem>
          ))}
      </Collapse>
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
  const [sections, setSections] = useState<IActiveSections>({
    cpu: true,
    memory: false,
    storage: false,
    network: false,
  });

  const onClick = (content: string) => () => {
    setOpen(false);
    setContent(content);
  };
  const toggleSection = (
    name: "cpu" | "memory" | "storage" | "network"
  ) => () => {
    setSections({ ...sections, [name]: !sections[name] });
  };
  return (
    <Grid container justify="space-between">
      <Grid item className={classes.alignContent}>
        <Typography>{content}</Typography>
      </Grid>
      <Grid item>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <List>
            <ListSubheader>
              <Button
                disableRipple
                classes={{ root: classes.listSubheader }}
                onClick={toggleSection("cpu")}
              >
                CPU
              </Button>
            </ListSubheader>
            <ListItems
              visible={sections.cpu}
              items={items.cpu}
              onClick={onClick}
            />
            <ListSubheader>
              <Button
                disableRipple
                classes={{ root: classes.listSubheader }}
                onClick={toggleSection("memory")}
              >
                MEMORY
              </Button>
            </ListSubheader>
            <ListItems
              visible={sections.memory}
              items={items.memory}
              onClick={onClick}
            />
            <ListSubheader>
              <Button
                disableRipple
                classes={{ root: classes.listSubheader }}
                onClick={toggleSection("storage")}
              >
                STORAGE
              </Button>
            </ListSubheader>
            <ListItems
              visible={sections.storage}
              items={items.storage}
              onClick={onClick}
            />
            <ListSubheader>
              <Button
                disableRipple
                classes={{ root: classes.listSubheader }}
                onClick={toggleSection("network")}
              >
                NETWORK
              </Button>
            </ListSubheader>
            <ListItems
              visible={sections.network}
              items={items.network}
              onClick={onClick}
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
