import { Grid, TextField, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { ChangeEvent, ChangeEventHandler, useState } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  container: { margin: theme.spacing(2) },
}));

export const StateControlledInput = () => {
  const styles = useStyles();

  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");

  return (
    <Grid container spacing={4} className={styles.container}>
      <Grid item>
        <TextField
          id="first"
          label="First"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          id="second"
          label="Second"
          value={second}
          onChange={(e) => setSecond(e.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          id="third"
          label="Third"
          value={third}
          onChange={(e) => setThird(e.target.value)}
        />
      </Grid>
    </Grid>
  );
};

interface InputProp {
  id: string;
  label: string;
  value: string;
}

export const AdditionalStateControlledInput = () => {
  const [inputs, setInputs] = useState<InputProp[]>([
    {
      id: "first",
      label: "First",
      value: "",
    },
    {
      id: "second",
      label: "Second",
      value: "",
    },
    {
      id: "third",
      label: "Third",
      value: "",
    },
    {
      id: "fourth",
      label: "Fourth",
      value: "",
    },
  ]);
  const styles = useStyles();
  const onChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { id, value },
  }) => {
    const newInputs = inputs.slice(0);
    const index = newInputs.findIndex((input) => input.id === id);
    if (index > -1) {
      newInputs[index].value = value;
    }
    setInputs(newInputs);
  };
  return (
    <Grid container spacing={4} className={styles.container}>
      {inputs.map((input) => (
        <Grid item key={`input:${input.id}`}>
          <TextField
            id={input.id}
            label={input.label}
            value={input.value}
            onChange={onChange}
          />
        </Grid>
      ))}
    </Grid>
  );
};
