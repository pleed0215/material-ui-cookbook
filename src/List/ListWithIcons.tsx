import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React, { useState } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap } from "@material-ui/core";

interface IListItem {
  name: string;
  selected?: boolean;
}
interface ISelectedIcon {
  selected?: boolean;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

const SelectedIcon: React.FC<ISelectedIcon> = ({ selected, Icon }) =>
  selected ? <CheckCircleOutlineIcon /> : <Icon />;

export const ListWithIcons = () => {
  const [items, setItems] = useState<IListItem[]>([
    {
      name: "First user",
    },
    {
      name: "Second user",
    },
    {
      name: "Third user",
    },
  ]);

  const onClick = (index: number) => () => {
    const tempItems = [...items];
    tempItems[index] = {
      ...tempItems[index],
      selected: !tempItems[index].selected,
    };
    setItems(tempItems);
  };

  return (
    <List>
      {items.map((item, index) => (
        <ListItem key={index} button onClick={onClick(index)}>
          <ListItemIcon>
            <SelectedIcon selected={item.selected} Icon={AccountCircleIcon} />
          </ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </List>
  );
};
