import React, { useState } from "react";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import InboxIcon from "@material-ui/icons/Inbox";
import MailIcon from "@material-ui/icons/Mail";
import ContactsIcon from "@material-ui/icons/Contacts";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import {
  Collapse,
  createStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SvgIconTypeMap,
  Theme,
} from "@material-ui/core";
import { ContactMail } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    subItems: {
      paddingLeft: theme.spacing(3),
    },
  })
);

interface IListItem {
  name: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  expanded: boolean;
  children: Array<{
    name: string;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  }>;
}

const ExpandIcon: React.FC<{ expanded: boolean }> = ({ expanded }) =>
  expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />;

export const NestedList = () => {
  const classes = useStyles();
  const [items, setItems] = useState<Array<IListItem>>([
    {
      name: "Messages",
      Icon: InboxIcon,
      expanded: false,
      children: [
        {
          name: "First message",
          Icon: MailIcon,
        },
        {
          name: "Second message",
          Icon: MailIcon,
        },
      ],
    },
    {
      name: "Contacts",
      Icon: ContactsIcon,
      expanded: false,
      children: [
        {
          name: "First Contact",
          Icon: ContactMailIcon,
        },
        {
          name: "Second Contact",
          Icon: ContactMailIcon,
        },
      ],
    },
  ]);

  const onClick = (index: number) => () => {
    const newItems = [...items];
    const item = items[index];
    newItems[index] = { ...item, expanded: !item.expanded };
    setItems(newItems);
  };
  return (
    <List>
      {items.map(({ Icon, ...item }, index) => (
        <>
          <ListItem key={index} button onClick={onClick(index)}>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={item.name} />
            <ExpandIcon expanded={item.expanded} />
          </ListItem>
          <Collapse in={item.expanded}>
            <List>
              {item.children.map((child, nestedIndex) => (
                <ListItem
                  key={`nested-list-${index}-${nestedIndex}`}
                  className={classes.subItems}
                >
                  <ListItemIcon>
                    <child.Icon />
                  </ListItemIcon>
                  <ListItemText primary={child.name} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </>
      ))}
    </List>
  );
};
