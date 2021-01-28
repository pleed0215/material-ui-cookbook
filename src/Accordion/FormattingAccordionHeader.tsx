import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  createStyles,
  makeStyles,
  SvgIconTypeMap,
  Theme,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DevicesIcon from "@material-ui/icons/Devices";
import NetworkWifiIcon from "@material-ui/icons/NetworkWifi";
import StorageIcon from "@material-ui/icons/Storage";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      marginRight: theme.spacing(1),
    },
  })
);

interface IPanel {
  title: string;
  content: string;
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  hidden?: boolean;
  disabled?: boolean;
}

export const FormattingAccordionHeader: React.FC = () => {
  const [expanded, setExpanded] = useState<number>(0);
  const [panels] = useState<IPanel[]>([
    {
      title: "Devices",
      content: "Devices content...",
      Icon: DevicesIcon,
    },
    {
      title: "Networks",
      content: "Networks content...",
      Icon: NetworkWifiIcon,
    },
    {
      title: "Storages",
      content: "Storages Content...",
      Icon: StorageIcon,
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

  const classes = useStyles();

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
              {/* @ts-ignore */}
              <panel.Icon className={classes.icon} />
              <Typography variant="subtitle2">{panel.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{panel.content}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
    </>
  );
};
