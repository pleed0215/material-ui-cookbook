import { Grid, IconButton, PropTypes } from "@material-ui/core";
import React, { useState } from "react";
import { Mic, MicOff, VolumeUp, VolumeOff } from "@material-ui/icons";

type Props = {
  iconColor: PropTypes.Color;
};

export const IconButtonExam: React.FC<Props> = ({ iconColor }) => {
  const [mic, setMic] = useState(true);
  const [volume, setVolume] = useState(true);

  return (
    <Grid container>
      <Grid item>
        <IconButton color={iconColor} onClick={() => setMic(!mic)}>
          {mic ? <Mic /> : <MicOff />}
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton color={iconColor} onClick={() => setVolume(!volume)}>
          {volume ? <VolumeUp /> : <VolumeOff />}
        </IconButton>
      </Grid>
    </Grid>
  );
};
