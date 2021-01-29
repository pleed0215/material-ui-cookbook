import React, { useState } from "react";
import BluetoothIcon from "@material-ui/icons/Bluetooth";
import BluetoothDisabledIcon from "@material-ui/icons/BluetoothDisabled";
import PowerSettingNewIcon from "@material-ui/icons/PowerSettingsNew";
import DevicesIcon from "@material-ui/icons/Devices";
import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  SvgIconTypeMap,
} from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

const MaybeBluetoothIcon: React.FC<{ bluetooth: boolean }> = ({ bluetooth }) =>
  bluetooth ? <BluetoothIcon /> : <BluetoothDisabledIcon />;

export const ListControls = () => {
  const [items, setItems] = useState<
    Array<{
      name: string;
      bluetooth: boolean;
      power: boolean;
      Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
    }>
  >([
    {
      name: "Device 1",
      bluetooth: true,
      power: true,
      Icon: DevicesIcon,
    },
    {
      name: "Device 2",
      bluetooth: true,
      power: true,
      Icon: DevicesIcon,
    },
    {
      name: "Device 3",
      bluetooth: true,
      power: true,
      Icon: DevicesIcon,
    },
  ]);
  const onToggleClick = (index: number, prop: "bluetooth" | "power") => () => {
    const newItems = [...items];
    const item = items[index];
    newItems[index] = { ...item, [prop]: !item[prop] };
    setItems(newItems);
  };

  return (
    <List>
      {items.map(({ Icon, ...item }, index) => (
        <ListItem key={index} button disabled={!item.power}>
          <ListItemIcon>
            {/* @ts-ignore */}
            <Icon />
          </ListItemIcon>
          <ListItemText primary={item.name} />
          <ListItemSecondaryAction>
            <IconButton onClick={onToggleClick(index, "bluetooth")}>
              <MaybeBluetoothIcon bluetooth={item.bluetooth} />
            </IconButton>
            <IconButton onClick={onToggleClick(index, "power")}>
              <PowerSettingNewIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};
