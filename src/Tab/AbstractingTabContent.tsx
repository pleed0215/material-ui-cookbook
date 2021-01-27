import {
  createStyles,
  makeStyles,
  Tab,
  Tabs,
  Theme,
  Typography,
} from "@material-ui/core";
import React, { Children, ReactElement, useState } from "react";

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

interface ITabContent {
  label: string;
  children?: ReactElement | ReactElement[] | string;
}
interface ITabContainer {
  value?: number;
  children?: ReactElement | ReactElement[];
}

const TabContent: React.FC<ITabContent> = ({ children }) => {
  const classes = useStyles();
  return (
    <Typography component="div" className={classes.tabContent}>
      {children}
    </Typography>
  );
};

const TabContainer: React.FC<ITabContainer> = ({
  children,
  value: valueProps,
}) => {
  const [value, setValue] = useState<number>();

  const onChange = (_: any, value: number) => {
    setValue(value);
  };

  if (value === undefined) setValue(valueProps);

  return (
    <>
      <Tabs value={value} onChange={onChange}>
        {children &&
          Children.map(children, (child: ReactElement<ITabContent>) => (
            <Tab label={child.props.label} />
          ))}
      </Tabs>
      {Children.map(children, (child, index) =>
        index === value ? child : null
      )}
    </>
  );
};

TabContainer.defaultProps = {
  value: 0,
};

export const AbstractingTabContent: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TabContainer value={2}>
        <TabContent label="Item One">Item One Content</TabContent>
        <TabContent label="Item Two">Item Two Content</TabContent>
        <TabContent label="Item three">Item Three Content</TabContent>
      </TabContainer>
    </div>
  );
};
