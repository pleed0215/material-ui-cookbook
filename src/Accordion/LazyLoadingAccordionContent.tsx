import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  createStyles,
  LinearProgress,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import classes from "*.module.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    panelContent: {
      flexDirection: "column",
    },
  })
);

interface IAccordion {
  title: string;
  content?: string;
}
interface IMaybeProgress {
  loading: boolean;
}

const fetchContent = (index: number) =>
  new Promise<string>((resolve) =>
    setTimeout(
      () =>
        resolve(
          [
            "First Accordion content...",
            "Second Accordion content...",
            "Third Accordion content...",
            "Fourth Accordion content...",
          ][index]
        ),
      1000
    )
  );

const MaybeProgress: React.FC<IMaybeProgress> = ({ loading }) =>
  loading ? <LinearProgress /> : null;

export const LazyLoadingAccordionContent = () => {
  const classes = useStyles();
  const [panel, setPanel] = useState<IAccordion[]>([
    { title: "First accordion title" },
    { title: "Second accordion title" },
    { title: "Third accordion title" },
    { title: "Fourth accordion title" },
  ]);

  const onChange = (index: number) => (
    e: ChangeEvent<{}>,
    expanded: boolean
  ) => {
    if (!panel[index].content && expanded) {
      fetchContent(index).then((content: string) => {
        const newPanel = [...panel];
        newPanel[index] = { ...newPanel[index], content };
        setPanel(newPanel);
      });
    }
  };

  return (
    <>
      {panel.map((p, i) => (
        <Accordion key={i} onChange={onChange(i)}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{p.title}</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.panelContent}>
            <MaybeProgress loading={!p.content} />
            <Typography>{p.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};
