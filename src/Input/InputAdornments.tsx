import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import React, { useState } from "react";

const PasswordField: React.FC<TextFieldProps> = ({ ...props }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <TextField
      {...props}
      type={visible ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={toggleVisibility}>
              {visible ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export const InputAdornments = () => {
  const [password, setPassword] = useState("");
  return (
    <PasswordField
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  );
};
