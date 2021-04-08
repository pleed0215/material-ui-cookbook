import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import {
  DirectionsBus,
  DirectionsBusOutlined,
  DirectionsCar,
  DirectionsCarOutlined,
  Train,
  TrainOutlined,
} from "@material-ui/icons";
import React, { ChangeEventHandler, useState } from "react";

export const RadioTypes = () => {
  const [value, setValue] = useState<"car" | "bus" | "train" | string>("train");

  const onChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }: {
    target: { value: "car" | "bus" | "train" | string };
  }) => setValue(value);

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Travel Mode</FormLabel>
      <RadioGroup name="travel" value={value} onChange={onChange} row>
        <FormControlLabel
          value="car"
          control={
            <Radio
              color="primary"
              icon={<DirectionsCarOutlined />}
              checkedIcon={<DirectionsCar />}
            />
          }
          label="Car"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="bus"
          control={
            <Radio
              color="primary"
              icon={<DirectionsBusOutlined />}
              checkedIcon={<DirectionsBus />}
            />
          }
          label="Bus"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="train"
          control={
            <Radio
              color="primary"
              icon={<TrainOutlined />}
              checkedIcon={<Train />}
            />
          }
          label="Train"
          labelPlacement="bottom"
        />
      </RadioGroup>
    </FormControl>
  );
};
