import React, { useState } from "react";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StopIcon from "@material-ui/icons/Stop";
import { makeStyles } from "@material-ui/styles";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Theme,
} from "@material-ui/core";

interface IRow {
  id: number;
  name: string;
  status: "running" | "off";
}

const useStyles = makeStyles((theme: Theme) => ({
  root: { margin: theme.spacing(2), textAlign: "center" },
  button: {},
}));

const StartButton: React.FC<{ row: IRow; onClick: any }> = ({
  row,
  onClick,
}) => (
  <IconButton
    onClick={onClick}
    color={row.status === "off" ? "primary" : "default"}
    disabled={row.status === "running"}
  >
    <PlayArrowIcon fontSize="small" />
  </IconButton>
);

const StopButton: React.FC<{ row: IRow; onClick: any }> = ({
  row,
  onClick,
}) => (
  <IconButton
    onClick={onClick}
    color={row.status === "running" ? "primary" : "default"}
    disabled={row.status === "off"}
  >
    <StopIcon fontSize="small" />
  </IconButton>
);

export const RowActions = () => {
  const classes = useStyles();
  const [rows, setRows] = useState<Array<IRow>>([
    {
      id: 1,
      name: "First Item",
      status: "running",
    },
    {
      id: 2,
      name: "Second Item",
      status: "off",
    },
    {
      id: 3,
      name: "Third item",
      status: "off",
    },
    {
      id: 4,
      name: "Fourth Item",
      status: "running",
    },
    {
      id: 5,
      name: "Fifth item",
      status: "off",
    },
  ]);

  const toggleStatus = (id: number) => () => {
    const newRows = [...rows];
    const index = rows.findIndex((row) => row.id === id);
    const row = rows[index];

    newRows[index] = {
      ...row,
      status: row.status === "running" ? "off" : "running",
    };
    setRows(newRows);
  };

  return (
    <Paper className={classes.root}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>
                <StartButton row={row} onClick={toggleStatus(row.id)} />
                <StopButton row={row} onClick={toggleStatus(row.id)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};
