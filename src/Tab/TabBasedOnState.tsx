import {
  AppBar,
  createStyles,
  makeStyles,
  Tab,
  Tabs,
  Theme,
  Typography,
} from "@material-ui/core";
import React, { ReactElement, useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
    tabContent: {
      padding: theme.spacing(2),
    },
  })
);

interface ITabItem {
  active: boolean;
  label: string;
  content: string;
  Icon: ReactElement;
  disable?: boolean;
  hidden?: boolean;
}

export const TabBasedOnState = () => {
  const classes = useStyles();
  const [value, setValue] = useState<number>(0);
  const [tabs, setTabs] = useState<ITabItem[]>([
    {
      active: true,
      label: "Home",
      content: "Item One Content",
      Icon: <HomeIcon />,
    },
    {
      active: false,
      label: "Item Two",
      content: "Item Two Content",
      hidden: true,
      Icon: <HomeIcon />,
    },
    {
      active: false,
      label: "Settings",
      content: "Item Three Content",
      Icon: <SettingsIcon />,
    },
    {
      active: false,
      label: "Search",
      content: "Item four Content",
      Icon: <SearchIcon />,
      disable: true,
    },
  ]);

  const onChange = (_: any, value: number) => {
    setTabs(
      tabs
        .map((tab) => ({ ...tab, active: false }))
        .map((tab, index) => ({ ...tab, active: index === value }))
    );
    setValue(value);
  };
  const active = tabs.findIndex((tab) => tab.active);
  const content = tabs[active].content;

  return (
    <div className={classes.root}>
      <Tabs value={value} onChange={onChange}>
        {tabs
          .filter((tab) => !tab.hidden)
          .map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              disabled={tab.disable}
              icon={tab.Icon}
            />
          ))}
      </Tabs>
      <Typography component="div" className={classes.tabContent}>
        {content}
      </Typography>
    </div>
  );
};
