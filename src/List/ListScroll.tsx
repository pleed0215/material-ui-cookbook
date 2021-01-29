import { createStyles, List, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      height: 300,
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
  return <List></List>;
};
