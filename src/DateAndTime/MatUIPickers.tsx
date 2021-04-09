import React, { ChangeEventHandler, useState } from "react";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { Grid, makeStyles, Theme } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme: Theme) => ({
  grid: {
    width: "65%",
  },
}));
export const IntegratingWithOtherDateTimePackages = () => {
  const styles = useStyles();
  const [dateTime, setDateTime] = useState(new Date());

  const onChange = (datetime: Date) => setDateTime(datetime);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container className={styles.grid} justify="space-around">
        <DatePicker
          margin="normal"
          label="Date Picker"
          value={dateTime}
          onChange={onChange}
        />
        <TimePicker
          margin="normal"
          label="Time Picker"
          value={dateTime}
          onChange={onChange}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};
