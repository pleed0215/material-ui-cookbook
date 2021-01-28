import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

interface IPanel {
  title: string;
  content: string;
  hidden?: boolean;
  disabled?: boolean;
}

export const StatefulExpansionPanel: React.FC = () => {
  const [expanded, setExpanded] = useState<number>(0);
  const [panels] = useState<IPanel[]>([
    {
      title: "First panel title",
      content: "First panel content...",
    },
    {
      title: "Second panel title",
      content: "Second panel content...",
    },
    {
      title: "Third panel title",
      content: "Third panel content...",
      disabled: true,
    },
    {
      title: "Fourth panel title",
      content: "Fourth panel content...",
      hidden: true,
    },
  ]);

  const onChange = (expanded: number) => () => {
    setExpanded(expanded);
  };

  return (
    <>
      {panels
        .filter((panel) => !panel.hidden)
        .map((panel, index) => (
          <Accordion
            key={index}
            disabled={panel.disabled}
            expanded={index === expanded}
            onChange={onChange(index)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{panel.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{panel.content}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
    </>
  );
};
