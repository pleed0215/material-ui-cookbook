import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  List,
  ListItem,
  ListItemText,
  Radio,
  RadioGroup,
  RadioGroupProps,
  Typography,
} from "@material-ui/core";
import React, { ChangeEventHandler, useState } from "react";

type OptionProps = {
  label: string;
  value: string;
};

const options: OptionProps[] = [
  {
    label: "First",
    value: "first",
  },
  {
    label: "Second",
    value: "second",
  },
  {
    label: "Third",
    value: "third",
  },
];

type RadioProps = RadioGroupProps & { options: OptionProps[]; label: string };

const RadioGroupFactory: React.FC<RadioProps> = ({
  value,
  label,
  onChange,
  options,
  name,
}) => (
  <FormControl component="fieldset" disabled>
    <FormLabel component="legend">{label}</FormLabel>
    <RadioGroup name={name} value={value} onChange={onChange}>
      {options.map((option, index) => (
        <FormControlLabel
          key={index}
          control={<Radio />}
          value={option.value}
          label={option.label}
        />
      ))}
    </RadioGroup>
  </FormControl>
);

export const AbstractingRadio = () => {
  const [value, setValue] = useState("first");

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setValue(e.target.value);

  return (
    <RadioGroupFactory
      value={value}
      label="Pick one"
      name="radio1"
      onChange={onChange}
      options={options}
    />
  );
};
