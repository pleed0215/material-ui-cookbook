import { List, ListItem, ListItemText } from "@material-ui/core";
import React, { useState } from "react";

interface IListItem {
  name: string;
  timestamp: Date;
  selected: boolean;
}

export const StateListItem = () => {
  const [items, setItems] = useState<IListItem[]>([
    {
      name: "First Item",
      timestamp: new Date(),
      selected: true,
    },
    {
      name: "Second Item",
      timestamp: new Date(),
      selected: false,
    },
    {
      name: "Third Item",
      timestamp: new Date(),
      selected: false,
    },
  ]);

  const onClick = (index: number) => () => {
    const newItems = [...items];
    newItems[index] = {
      ...newItems[index],
      selected: !newItems[index].selected,
    };
    setItems(newItems);
  };

  return (
    <List>
      {items.map((item, index) => (
        <ListItem
          key={index}
          button
          dense
          selected={item.selected}
          onClick={onClick(index)}
        >
          <ListItemText
            primary={item.name}
            secondary={item.timestamp.toLocaleDateString()}
          />
        </ListItem>
      ))}
    </List>
  );
};
