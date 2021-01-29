import {
  createStyles,
  List,
  ListItem,
  ListItemText,
  Paper,
  Theme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { List as VirtualList, AutoSizer } from "react-virtualized";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      height: 300,
      paddingBottom: 10,
      paddingTop: 10,
    },
    listItem: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: "0 25px",
      backgroundColor: "#fff",
      borderBottom: "1px solid #e0e0e0",
    },
    paper: {
      margin: theme.spacing(3),
    },
  })
);

function* genItems() {
  for (let i = 1; i < 1000; i++) {
    yield `Item ${i}`;
  }
}

export const ScrollingList = () => {
  const classes = useStyles();

  const [items] = useState<Array<string>>([...genItems()]);

  const rowRenderer: React.FC<{
    index: number;
    isScrolling: boolean;
    style: React.CSSProperties;
    key: string | number;
  }> = ({ index, isScrolling, style, key }) => {
    const item = items[index];

    return (
      <ListItem key={key} style={style} className={classes.listItem}>
        <ListItemText primary={isScrolling ? "..." : item} />
      </ListItem>
    );
  };

  return (
    <Paper className={classes.paper}>
      <List className={classes.list}>
        <AutoSizer disableHeight>
          {({ width }) => (
            <VirtualList
              width={width}
              height={300}
              rowHeight={50}
              rowCount={items.length}
              rowRenderer={rowRenderer}
            />
          )}
        </AutoSizer>
      </List>
    </Paper>
  );
};
