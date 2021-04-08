import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  List,
  ListItem,
  ListItemText,
  Switch,
  Typography,
} from "@material-ui/core";
import React, { ChangeEventHandler, useState } from "react";

type InputProps = {
  label: string;
  checked?: boolean;
};

type CheckboxGroupProps = {
  values: Array<InputProps>;
  label: string;
  onChange: (index: number) => ChangeEventHandler<HTMLInputElement>;
};

const SwitchGroup: React.FC<CheckboxGroupProps> = ({
  values,
  label,
  onChange,
}) => (
  <FormControl component="fieldset">
    <FormLabel component="legend">{label}</FormLabel>
    <FormGroup>
      {values.map((value, index) => (
        <FormControlLabel
          key={index}
          control={
            <Switch checked={value.checked} onChange={onChange(index)} />
          }
          label={value.label}
        />
      ))}
    </FormGroup>
  </FormControl>
);

export const SwitchGroupExam = () => {
  const [values, setValues] = useState<Array<InputProps>>([
    {
      label: "First",
      checked: false,
    },
    {
      label: "Second",
      checked: true,
    },
    {
      label: "Third",
      checked: false,
    },
  ]);

  const onChange: (index: number) => ChangeEventHandler<HTMLInputElement> = (
    index
  ) => ({ target: { checked } }) => {
    const newValues = values.slice(0);
    const value = newValues[index];
    newValues[index] = { ...value, checked };
    setValues(newValues);
  };

  return (
    <>
      <SwitchGroup label="Choices" values={values} onChange={onChange} />
      <Typography variant="h6">Selections</Typography>
      <List>
        {values
          .filter((value) => value.checked)
          .map((value, index) => (
            <ListItem key={index}>
              <ListItemText>{value.label}</ListItemText>
            </ListItem>
          ))}
      </List>
    </>
  );
};
