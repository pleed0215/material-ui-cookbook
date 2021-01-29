import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React from "react";

export const ListSections = () => {
  return (
    <>
      <Typography variant="h4">First Section</Typography>
      <List>
        <ListItem>
          <ListItemText primary="First" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Second" />
        </ListItem>
      </List>
      <Divider />
      <Typography variant="h4">Second Section</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Third" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Fourth" />
        </ListItem>
      </List>
      <Divider />
      <Typography variant="h4">Third Section</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Fifth" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Sixth`" />
        </ListItem>
      </List>
    </>
  );
};
