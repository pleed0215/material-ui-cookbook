import {
  AppBar,
  Button,
  Dialog,
  IconButton,
  Slide,
  SlideProps,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    position: "relative",
  },
  flex: {
    flex: 1,
  },
}));

const Transition: React.FC<SlideProps> = (props) => (
  <Slide direction="up" {...props} />
);

const id = (function* () {
  let id = 0;
  while (true) {
    id += 1;
    yield id;
  }
})();

const rowData = (
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) => ({
  id: id.next().value,
  name,
  calories,
  fat,
  carbs,
  protein,
});

const rows = [
  rowData("Frozen yoghurt", 159, 6.9, 24, 4.0),
  rowData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  rowData("Eclair", 262, 16.0, 24, 6.0),
  rowData("Cupcake", 305, 3.7, 67, 4.3),
  rowData("Gingerbread", 356, 16.0, 49, 3.9),
];

export const FullScreenDialogs = () => {
  const styles = useStyles();
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button variant="outlined" color="primary" onClick={onOpen}>
        Export Data
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
      >
        <AppBar className={styles.appBar}>
          <Toolbar>
            <IconButton color="inherit" onClick={onClose} aria-label="Close">
              <Close />
            </IconButton>
            <Typography variant="h6" color="inherit" className={styles.flex}>
              Export Data
            </Typography>
            <Button color="inherit" onClick={onClose}>
              Export
            </Button>
          </Toolbar>
        </AppBar>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat (g)</TableCell>
              <TableCell align="right">Carbs (g)</TableCell>
              <TableCell align="right">Protein (g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Dialog>
    </>
  );
};
