import { TextField, TextFieldProps, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { ChangeEventHandler, useState } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  textField: { margin: theme.spacing(1) },
}));

type TimePickerProps = TextFieldProps & { time: Date | string };

const TimePicker: React.FC<TimePickerProps> = ({ time, ...props }) => (
  <TextField
    value={time}
    type="time"
    InputLabelProps={{ shrink: true }}
    inputProps={{ step: 300 }}
    {...props}
  />
);

export const UsingTimePickers = () => {
  const styles = useStyles();
  const [time, setTime] = useState("");

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setTime(e.target.value);

  return (
    <>
      <TimePicker
        time={time}
        onChange={onChange}
        label="My Time"
        className={styles.textField}
      />
      <TextField
        value={time}
        label="Updated Date Value"
        className={styles.textField}
        InputLabelProps={{ shrink: true }}
        InputProps={{ readOnly: true }}
      />
    </>
  );
};
