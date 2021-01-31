import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Theme,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    maxWidth: 322,
  },
  media: {
    width: 322,
    height: 322,
  },
  header: {
    textAlign: "center",
  },
}));

export const PresentingMedia = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image="/grapefruit.jpg"
        title="Grapefruit"
      />
      <CardHeader
        title="Grapefruit"
        subheader="Red"
        className={classes.header}
      />
      {/*
      <CardContent>
        <Typography>Mmmm, Grapefruit...</Typography>
      </CardContent>
      */}
    </Card>
  );
};
