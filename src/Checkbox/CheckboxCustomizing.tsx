import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  SvgIconTypeMap,
} from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import {
  AccountBalance,
  AccountBalanceOutlined,
  Backup,
  BackupOutlined,
  Build,
  BuildOutlined,
} from "@material-ui/icons";
import React, { ChangeEventHandler, useEffect, useState } from "react";

interface ItemProps {
  name: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  CheckedIcon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

const initialItems: Array<ItemProps> = [
  {
    name: "AccountBalance",
    Icon: AccountBalanceOutlined,
    CheckedIcon: AccountBalance,
  },
  {
    name: "Backup",
    Icon: BackupOutlined,
    CheckedIcon: Backup,
  },
  {
    name: "Build",
    Icon: BuildOutlined,
    CheckedIcon: Build,
  },
];

export const CheckboxCustomizing = () => {
  const [items, setItems] = useState<{ [name: string]: boolean }>({});

  useEffect(() => {
    setItems(
      initialItems.reduce(
        (state, item) => ({ ...state, [item.name]: false }),
        {}
      )
    );
  }, []);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setItems({ [e.target.name]: e.target.checked });
  };

  return (
    <FormGroup>
      {initialItems.map(({ name, Icon, CheckedIcon }, index) => (
        <FormControlLabel
          key={index}
          control={
            <Checkbox
              color="primary"
              checked={items[name]}
              onChange={onChange}
              inputProps={{ name }}
              icon={<Icon fontSize="small" />}
              checkedIcon={<CheckedIcon fontSize="small" />}
            />
          }
          label={name}
        />
      ))}
    </FormGroup>
  );
};
