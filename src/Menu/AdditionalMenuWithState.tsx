import { Button, Menu, MenuItem, Theme } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React, { EventHandler, useEffect, useState } from "react";
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

interface MyMenuProps {
  anchorEl: HTMLElement;
  onClose: MouseEventHandler;
  items: ItemProps[];
}

const MyMenu: React.FC<MyMenuProps> = ({ items, onClose, anchorEl }) => (
  <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}>
    {items.map((item, index) => (
      <MenuItem key={index} onClick={item.onClick} disabled={item.disabled}>
        {item.name}
      </MenuItem>
    ))}
  </Menu>
);

export const AdditionalMenuWithState = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement>(null);
  const styles = useStyles();
  const onOpen: MouseEventHandler = (e) => setAnchorEl(e.currentTarget);
  const onClose: MouseEventHandler = () => {
    console.log("hello");
    setAnchorEl(null);
  };
  const [items, setItems] = useState<ItemProps[]>([
    { name: "First", onClick: onClose },
    { name: "Second", onClick: onClose },
    { name: "Third", onClick: onClose },
    { name: "Fourth", onClick: onClose, disabled: true },
  ]);

  useEffect(() => {
    const toggleFourth = () => {
      let newItems = items.slice(0);
      newItems[3] = { ...newItems[3], disabled: !newItems[3].disabled };
      newItems[0] = {
        ...newItems[0],
        name: newItems[3].disabled ? "Enable Fourth" : "Disable Fourth",
      };
      console.log(newItems);
      setItems(newItems);
    };

    const newItems = [...items];
    newItems[0] = { ...items[0], onClick: toggleFourth };
    setItems(newItems);
  }, []);

  return (
    <>
      <Button onClick={onOpen}>
        Menu
        <MenuIcon className={styles.rightIcon} />
      </Button>
      <MyMenu anchorEl={anchorEl} items={items} onClose={onClose} />
    </>
  );
};
