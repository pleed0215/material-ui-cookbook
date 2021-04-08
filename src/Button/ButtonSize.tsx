import {
  Button,
  ButtonProps,
  ButtonTypeMap,
  ExtendButtonBase,
  Fab,
  FabProps,
  FabTypeMap,
  Grid,
  IconButton,
  IconButtonProps,
  IconButtonTypeMap,
  PropTypes,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React from "react";

type MyButtonProps = (
  | ExtendButtonBase<FabTypeMap<{}, "button">>
  | ExtendButtonBase<IconButtonTypeMap<{}, "button">>
  | ExtendButtonBase<ButtonTypeMap<{}, "button">>
) & { fab?: boolean };

const MyButton: React.FC<MyButtonProps> = ({ fab, ...props }) => {
  const [child] = React.Children.toArray(props.children);
  let ButtonComponent;
  console.log(props);

  if (React.isValidElement(child) && fab) {
    return <Fab {...props}>{props.children}</Fab>;
  } else if (React.isValidElement(child)) {
    return <IconButton {...props} />;
  } else {
    return <Button {...props} />;
  }
};

type Props = { color: PropTypes.Color; size: "small" | "medium" | "large" };

export const ButtonSize: React.FC<Props> = ({ color, size }) => {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        {/* @ts-ignore */}
        <MyButton variant="contained" size={size} color={color}>
          Add
        </MyButton>
      </Grid>
      <Grid item>
        {/* @ts-ignore */}
        <MyButton size={size} color={color}>
          <Add />
        </MyButton>
      </Grid>
      <Grid item>
        {/* @ts-ignore */}
        <MyButton fab size={size} color={color}>
          <Add />
        </MyButton>
      </Grid>
    </Grid>
  );
};
