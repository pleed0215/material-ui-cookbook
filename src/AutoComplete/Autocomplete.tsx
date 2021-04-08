import {
  InputBaseComponentProps,
  InputProps,
  TextField,
} from "@material-ui/core";
import { ControlProps } from "react-select";
import React from "react";
import { OptionProps } from "react-select/src/types";

const inputComponent: React.FC<InputBaseComponentProps> = ({
  inputRef,
  ...props
}) => (
  // @ts-ignore
  <div ref={inputRef} {...props} />
);

const Control: React.FC<ControlProps<OptionProps, false>> = (props) => {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.className,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
    />
  );
};
