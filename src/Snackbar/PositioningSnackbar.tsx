import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Snackbar,
  SnackbarOrigin,
  Theme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { ChangeEvent, useState } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  group: {},
}));

export const PositioningSnackbar = () => {
  const classes = useStyles();
  const [vertical, setVertical] = useState<"top" | "bottom">("top");
  const [horizontal, setHorizontal] = useState<"left" | "center" | "right">(
    "left"
  );

  const onVerticalChange = ({
    target: { value },
  }: {
    target: { value: "top" | "bottom" };
  }) => {
    setVertical(value);
  };
  const onHorizontalChange = ({
    target: { value },
  }: {
    target: { value: "left" | "right" | "center" };
  }) => setHorizontal(value);
  return (
    <>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Vertical</FormLabel>
        <RadioGroup
          name="vertical"
          className={classes.group}
          value={vertical}
          /*
          // @ts-ignore */
          onChange={onVerticalChange}
        >
          <FormControlLabel value="top" control={<Radio />} label="Top" />
          <FormControlLabel value="bottom" control={<Radio />} label="Bottom" />
        </RadioGroup>
        <FormLabel component="legend">Horizontal</FormLabel>
        <RadioGroup
          name="horizontal"
          className={classes.group}
          value={horizontal}
          /*
          // @ts-ignore */
          onChange={onHorizontalChange}
        >
          <FormControlLabel value="left" control={<Radio />} label="Left" />
          <FormControlLabel value="center" control={<Radio />} label="Center" />
          <FormControlLabel value="right" control={<Radio />} label="Right" />
        </RadioGroup>
      </FormControl>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={true}
        message="Positioned Snackbar"
      />
    </>
  );
};
