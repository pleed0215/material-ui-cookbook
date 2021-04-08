import {
  Chip,
  FormControl,
  Input,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Theme,
} from "@material-ui/core";
import React, { ChangeEventHandler, useState } from "react";

const options = [
  { id: 1, label: "First" },
  { id: 2, label: "Second" },
  { id: 3, label: "Third" },
  { id: 4, label: "Fourth" },
  { id: 5, label: "Fifth" },
];

const useStyles = makeStyles((theme: Theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
    maxWidth: 280,
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

const Selected: React.FC<{ selected: any[] }> = ({ selected }) => {
  const styles = useStyles();

  return (
    <>
      {selected.map((value) => (
        <Chip
          key={value}
          label={options.find((option) => option.id === value).label}
          className={styles.chip}
        />
      ))}
    </>
  );
};

export const SelectMultiItems = () => {
  const styles = useStyles();
  const [selected, setSelected] = useState<number[]>([]);

  const onChange: ChangeEventHandler<{ name?: string; value: any }> = (e) => {
    console.log(e.target.value);
    // @ts-ignore
    if (e.target.value) setSelected(e.target.value);
  };

  return (
    <FormControl className={styles.formControl}>
      <InputLabel htmlFor="multi">Value</InputLabel>
      <Select
        multiple
        value={selected}
        onChange={onChange}
        input={<Input id="multi" />}
        renderValue={(selected: any) => <Selected selected={selected} />}
      >
        {options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
