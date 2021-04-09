import {
  makeStyles,
  TextField,
  TextFieldProps,
  Theme,
} from "@material-ui/core";
import React, { ChangeEventHandler, useState } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  textField: { margin: theme.spacing(1) },
}));

const formatDate = (date: Date) =>
  date.toISOString().split(":").splice(0, 2).join(":");

type DateTimePicker = TextFieldProps & { date: Date | string };
const DateTimePicker: React.FC<DateTimePicker> = ({ date, ...props }) => (
  <TextField
    value={date instanceof Date ? date.toISOString().replace("Z", "") : date}
    type="datetime-local"
    InputLabelProps={{ shrink: true }}
    {...props}
  />
);

export const CombiningDateAndTime = () => {
  const styles = useStyles();
  const [dateTime, setDateTime] = useState(new Date());

  const onChangeDate: ChangeEventHandler<HTMLInputElement> = (e) =>
    setDateTime(new Date(`${e.target.value}Z`));

  return (
    <>
      <DateTimePicker
        date={dateTime}
        onChange={onChangeDate}
        label="My Date/Time"
        className={styles.textField}
      />
      <TextField
        value={formatDate(dateTime)}
        label="Updated Date Value"
        className={styles.textField}
        InputLabelProps={{ shrink: true }}
        InputProps={{ readOnly: true }}
      />
    </>
  );
};
