import { Button, Menu, MenuItem, Theme } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { MouseEventHandler } from "react-select";

const useStyles = makeStyles((theme: Theme) => ({
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
}));

interface ItemProps {
  name: string;
  onClick: MouseEventHandler;
  disabled?: boolean;
}

export const MenuWithState = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement>(null);
  const styles = useStyles();
  const onOpen: MouseEventHandler = (e) => setAnchorEl(e.currentTarget);
  const onClose: MouseEventHandler = () => {
    setAnchorEl(null);
  };
  const [items, setItems] = useState<ItemProps[]>([
    { name: "First", onClick: onClose },
    { name: "Second", onClick: onClose },
    { name: "Third", onClick: onClose },
    { name: "Fourth", onClick: onClose, disabled: true },
  ]);

  return (
    <>
      <Button onClick={onOpen}>
        Menu
        <MenuIcon className={styles.rightIcon} />
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}>
        {items.map((item, index) => (
          <MenuItem key={index} onClick={item.onClick} disabled={item.disabled}>
            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
