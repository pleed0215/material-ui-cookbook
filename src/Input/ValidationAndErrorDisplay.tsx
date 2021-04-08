import {
  Grid,
  makeStyles,
  TextField,
  TextFieldProps,
  Theme,
} from "@material-ui/core";
import React, { ChangeEventHandler, useState } from "react";

type ExtendedTextFieldProp = TextFieldProps & {
  getHelperText?: (error: boolean) => string;
  isValid?: (value: string) => boolean;
};
const useStyles = makeStyles((theme: Theme) => ({
  container: { margin: theme.spacing(2) },
}));

export const ValidationAndErrorDisplay = () => {
  const [inputs, setInputs] = useState<ExtendedTextFieldProp[]>([
    {
      id: "phone",
      label: "Phone",
      placeholder: "999-999-9999",
      value: "",
      error: false,
      helperText: "Any valid phone number will do",
      getHelperText: (error) =>
        error
          ? "Woops. Not a valid phone number"
          : "Any valid phone number will do",
      isValid: (value) =>
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3,4}[-\s\.]?[0-9]{4,6}$/g.test(
          value
        ),
    },
    {
      id: "email",
      label: "Email",
      placeholder: "john@acme.com",
      value: "",
      error: false,
      helperText: "Any valid email address will do",
      getHelperText: (error) =>
        error
          ? "Woops. Not a valid email address"
          : "Any valid email address will do",
      isValid: (value) => /\S+@\S+\.\S+/g.test(value),
    },
  ]);
  const onChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { id, value },
  }) => {
    const newInputs = inputs.slice(0);
    const index = newInputs.findIndex((input) => input.id === id);
    if (index > -1) {
      const input = inputs[index];
      const isValid = input.isValid(value);
      newInputs[index] = {
        ...input,
        value,
        error: !isValid,
        helperText: input.getHelperText(!isValid),
      };
    }
    setInputs(newInputs);
  };
  const styles = useStyles();

  return (
    <Grid container spacing={4} className={styles.container}>
      {inputs.map((input) => {
        const { isValid, getHelperText, ...props } = input;
        return (
          <Grid item key={input.id}>
            <TextField {...props} onChange={onChange} />
          </Grid>
        );
      })}
    </Grid>
  );
};
