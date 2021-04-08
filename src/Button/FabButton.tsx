import {
  Fab,
  Theme,
  PropTypes,
  ExtendButtonBase,
  FabTypeMap,
  FabProps,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Add } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  fab: {
    margin: 0,
    top: "auto",
    left: "auto",
    bottom: 20,
    right: 20,
    position: "fixed",
  },
}));

interface ExtendedFabButtonProp extends FabProps {}

export const ExtendedFabButton: React.FC<ExtendedFabButtonProp> = ({
  children,
  variant,
  ...props
}) => {
  const styles = useStyles();
  const isExtended = Boolean(
    React.Children.toArray(children).find((child) => typeof child === "string")
  );

  return (
    <Fab
      className={styles.fab}
      variant={isExtended ? "extended" : "round"}
      {...props}
    >
      {children}
    </Fab>
  );
};

export const FabButton: React.FC<{ fabColor: PropTypes.Color }> = ({
  fabColor,
}) => {
  const styles = useStyles();
  return (
    <ExtendedFabButton color={fabColor} variant="round">
      add
      <Add />
    </ExtendedFabButton>
  );
};
