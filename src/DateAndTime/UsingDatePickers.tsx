import { TextField, TextFieldProps, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { ChangeEventHandler, useState } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  textField: { margin: theme.spacing(1) },
}));

/*export const UsingDatePickers = () => {
  const styles = useStyles();
  const [date, setDate] = useState("");

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setDate(e.target.value);

  const dateFormatted = date
    ? new Date(`${date}T00:00:00`).toLocaleDateString()
    : null;

  return (
    <>
      <TextField
        value={date}
        onChange={onChange}
        label="My Date"
        type="date"
        className={styles.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        value={dateFormatted}
        label="Updated Date Value"
        className={styles.textField}
        InputLabelProps={{ shrink: true }}
        InputProps={{ readOnly: true }}
      />
    </>
  );
};*/

const formattedDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return [
    year,
    month < 10 ? `0${month}` : month,
    day < 10 ? `0${day}` : day,
  ].join("-");
};

type DatePickerProps = TextFieldProps & { date: Date | string };

const DatePicker: React.FC<DatePickerProps> = ({ date, ...props }) => (
  <TextField
    value={date instanceof Date ? formattedDate(date) : date}
    type="date"
    InputLabelProps={{ shrink: true }}
    {...props}
  />
);

export const UsingDatePickers = () => {
  const styles = useStyles();
  const [date, setDate] = useState<Date | string>("");

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setDate(e.target.value);

  const dateFormatted = date
    ? new Date(`${date}T00:00:00`).toLocaleDateString()
    : null;

  return (
    <>
      <DatePicker
        date={date}
        onChange={onChange}
        label="My Date"
        className={styles.textField}
      />
      <TextField
        value={dateFormatted}
        label="Updated Date Value"
        className={styles.textField}
        InputLabelProps={{ shrink: true }}
        InputProps={{ readOnly: true }}
      />
    </>
  );
};
