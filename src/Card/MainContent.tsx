import { Card, CardContent, Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    maxWidth: 400,
  },
  content: {
    marginTop: theme.spacing(1),
  },
}));

export const MainContent = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h4">Subject Title</Typography>
        <Typography variant="subtitle1">A little more about subject</Typography>

        <Typography className={classes.content}>
          Even more information on the subject, contained within the card. You
          cat fit a lot of information here, but don't try to over do it.
        </Typography>
      </CardContent>
    </Card>
  );
};
