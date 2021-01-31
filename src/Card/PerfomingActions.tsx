import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";

import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import ContactMailIcon from "@material-ui/icons/ContactMailRounded";

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    maxWidth: 400,
  },
  actions: {
    justifyContent: "flex-end",
  },
}));

export const PerformingActions = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
        title="Ron Swanson"
        subheader="Legend"
        avatar={
          <Avatar>
            <PersonIcon />
          </Avatar>
        }
      />
      <CardContent>
        <Typography variant="caption">Joined 2009</Typography>
        <Typography>
          Some filter text about the user. There doesn't have to be alot - just
          enough so that the text spans at least two lines.
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.actions}>
        <IconButton>
          <ContactMailIcon />
        </IconButton>
        <IconButton>
          <ContactPhoneIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
