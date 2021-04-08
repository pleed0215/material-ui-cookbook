import { InputAdornment, TextField, TextFieldProps } from "@material-ui/core";
import { CheckCircle, Error } from "@material-ui/icons";
import React, { useState } from "react";

type ValidationFieldProps = TextFieldProps & {
  isValid: (value: string) => boolean;
  value: string;
};

const ValidationField: React.FC<ValidationFieldProps> = ({
  isValid,
  ...rest
}) => {
  const empty = rest.value === "";
  const valid = isValid(rest.value);
  let startAdornment;

  if (empty) {
    startAdornment = null;
  } else if (valid) {
    startAdornment = (
      <InputAdornment position="start">
        <CheckCircle color="primary" />
      </InputAdornment>
    );
  } else {
    startAdornment = (
      <InputAdornment position="start">
        <Error color="error" />
      </InputAdornment>
    );
  }

  return (
    <TextField
      {...rest}
      error={!empty && !valid}
      InputProps={{ startAdornment }}
    />
  );
};

export const AnotherAdornments = () => {
  const [email, setEmail] = useState("");

  return (
    <ValidationField
      label="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      isValid={(value) => /\S+@\S+\.\S+/g.test(value)}
    />
  );
};
