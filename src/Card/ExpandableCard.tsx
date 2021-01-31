import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  Theme,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    maxWidth: 400,
  },
  expand: {
    marginLeft: "auto",
  },
}));

const ExpandIcon: React.FC<{ expanded: boolean }> = ({ expanded }) =>
  expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />;

export const ExpandableCard = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState<boolean>(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
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
          Even more information on the subject, contained within the card. You
          cat fit a lot of information here, but don't try to over do it.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <ContactMailIcon />
        </IconButton>
        <IconButton>
          <ContactPhoneIcon />
        </IconButton>
        <IconButton className={classes.expand} onClick={toggleExpanded}>
          <ExpandIcon expanded={expanded} />
        </IconButton>
      </CardActions>
      <Collapse in={expanded}>
        <CardContent>
          <Typography>
            Even more filler text about the user. It doesn't fit the main
            content area of the card, so this is what the user will see when
            they click the expand button.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
