import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    panelDetails: {
      flexDirection: "column",
      height: 150,
      overflow: "auto",
    },
  })
);

const IpsumContent: React.FC = () => (
  <>
    <Typography paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut mauris
      eros. Phasellus eget neque vel sapien malesuada rutrum eget vel nisl.
      Fusce cursus diam in dolor tempor facilisis. Praesent feugiat neque
      mauris, quis dignissim lorem pretium lacinia. Quisque accumsan massa nec
      orci vulputate porttitor. Donec tincidunt ipsum quis massa consectetur,
      nec egestas ligula dignissim. Vestibulum tincidunt pharetra arcu at
      consectetur. Phasellus ornare pretium massa, quis fringilla libero feugiat
      a. Fusce ligula lectus, tempus at erat sit amet, aliquam mattis nulla.
      Mauris in dolor et purus faucibus elementum in maximus nisl. Integer
      iaculis velit quam, vestibulum molestie dui commodo id. Donec ut mattis
      nisi, quis dignissim purus. Sed ultricies metus nisl, in fermentum eros
      blandit vel.
    </Typography>
    <Typography paragraph>
      Nullam mollis et nisl nec efficitur. Proin pharetra libero non augue
      accumsan commodo. Suspendisse vulputate, ligula in hendrerit malesuada,
      arcu mi fermentum ligula, vel pharetra orci tellus id metus. Nulla
      facilisi. Donec sodales tincidunt ipsum, eu egestas odio vestibulum ut.
      Cras sed rutrum turpis, ac venenatis nisl. Morbi dapibus felis nisl, a
      rhoncus velit mollis non. Fusce ultricies rhoncus dolor eget lacinia.
      Maecenas nec semper erat, at faucibus orci. Vivamus faucibus dictum nunc,
      a semper risus mollis eu. Proin sed urna malesuada, venenatis justo in,
      placerat augue. Cras pulvinar ipsum et nisl tempus, sed ultricies risus
      mollis. Sed nec cursus felis.
    </Typography>
    <Typography paragraph>
      Vestibulum dictum libero eget tellus sodales, vitae imperdiet erat
      hendrerit. Phasellus rhoncus vulputate fringilla. Praesent euismod rhoncus
      quam, rhoncus eleifend metus feugiat at. Cras eget ante malesuada,
      imperdiet ligula quis, scelerisque leo. Mauris suscipit, odio euismod
      volutpat convallis, nisi libero mattis urna, vitae malesuada nunc ante et
      ligula. Donec elit urna, condimentum at hendrerit sed, dapibus eget ex. In
      eget ex luctus lorem vehicula rhoncus. Proin sit amet pellentesque magna.
      Aenean et iaculis lacus, eget tempor dolor. Proin iaculis sem ac fermentum
      euismod. Nam nisi nisi, ultricies ac congue id, tempus in tortor.
    </Typography>
  </>
);

export const ScrollableAccordion = () => {
  const classes = useStyles();
  return (
    <>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>First</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.panelDetails}>
          <IpsumContent />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Second</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.panelDetails}>
          <IpsumContent />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Third</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.panelDetails}>
          <IpsumContent />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Fourth</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.panelDetails}>
          <IpsumContent />
        </AccordionDetails>
      </Accordion>
    </>
  );
};
