import clsx from "clsx";
import {
  Avatar,
  Badge,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SvgIconTypeMap,
  Theme,
} from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import React, { useState } from "react";

import MarkunreadIcon from "@material-ui/icons/Markunread";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import LowPriorityIcon from "@material-ui/icons/LowPriority";
import DeleteIcon from "@material-ui/icons/Delete";
import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    activeAvatar: {
      backgroundColor: theme.palette.primary.dark,
    },
  })
);

interface IListItem {
  name: string;
  updated: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  notifications?: number;
}

export const ListAvatarsAndText = () => {
  const classes = useStyles();
  const [items] = useState<IListItem[]>([
    {
      name: "Unread",
      updated: "2 minutes ago",
      Icon: MarkunreadIcon,
      notifications: 1,
    },
    {
      name: "High Priority",
      updated: "30 minutes ago",
      Icon: PriorityHighIcon,
    },
    {
      name: "Low Priority",
      updated: "3 hours ago",
      Icon: LowPriorityIcon,
    },
    {
      name: "Junk",
      updated: "6 days ago",
      Icon: DeleteIcon,
    },
  ]);

  return (
    <List>
      {items.map(({ Icon, ...item }, index) => (
        <ListItem button key={index}>
          <ListItemIcon>
            <Badge
              color={item.notifications ? "secondary" : undefined}
              badgeContent={item.notifications ? item.notifications : null}
            >
              <Avatar
                className={clsx({ [classes.activeAvatar]: item.notifications })}
              >
                <Icon />
              </Avatar>
            </Badge>
          </ListItemIcon>
          <ListItemText primary={item.name} secondary={item.updated} />
        </ListItem>
      ))}
    </List>
  );
};
