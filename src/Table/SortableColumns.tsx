import {
  CircularProgress,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Theme,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

interface ITableItem {
  id: number;
  name: string;
  created: Date;
  high: number;
  low: number;
  average: number;
}

interface ITableColumn {
  name: keyof ITableItem;
  active: boolean;
  numeric?: boolean;
  order?: "desc" | "asc";
}

const comparator = (prop: keyof ITableItem, desc: boolean = true) => (
  a: ITableItem,
  b: ITableItem
) => {
  const order = desc ? -1 : 1;
  if (a[prop] < b[prop]) {
    return -1 * order;
  }

  if (a[prop] > b[prop]) {
    return 1 * order;
  }

  return 0 * order;
};

const fetchData = () =>
  new Promise<Array<ITableItem>>((resolve) => {
    const items: Array<ITableItem> = [
      {
        id: 1,
        name: "First Item",
        created: new Date(),
        high: 2935,
        low: 1924,
        average: 2429.5,
      },
      {
        id: 2,
        name: "Second Item",
        created: new Date(),
        high: 439,
        low: 231,
        average: 335,
      },
      {
        id: 3,
        name: "Third item",
        created: new Date(),
        high: 8239,
        low: 5629,
        average: 6934,
      },
      {
        id: 4,
        name: "Fourth item",
        created: new Date(),
        high: 3203,
        low: 3127,
        average: 3165,
      },
      {
        id: 5,
        name: "Fifth item",
        created: new Date(),
        high: 981,
        low: 879,
        average: 930,
      },
    ];

    setTimeout(() => resolve(items), 3000);
  });

const useStyles = makeStyles((theme: Theme) => ({
  spacing: { margin: theme.spacing(2) },
  textCenter: { textAlign: "center" },
}));

const MaybeLoading: React.FC<{ loading: boolean }> = ({ loading }) => {
  const classes = useStyles();
  return loading ? <CircularProgress className={classes.spacing} /> : null;
};

export const SortableColumn = () => {
  const classes = useStyles();
  const [columns, setColumns] = useState<Array<ITableColumn>>([
    { name: "name", active: false },
    { name: "created", active: false },
    { name: "high", active: false, numeric: true },
    { name: "low", active: false, numeric: true },
    { name: "average", active: true, numeric: true },
  ]);
  const [items, setItems] = useState<Array<ITableItem>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const onSortClick = (index: number) => () => {
    setColumns(
      columns.map((column, i) => ({
        ...column,
        active: index === i,
        order:
          (index === i && (column.order === "desc" ? "asc" : "desc")) ||
          undefined,
      }))
    );

    setItems(
      items
        .slice()
        .sort(comparator(columns[index].name, columns[index].order === "desc"))
    );
  };

  useEffect(() => {
    setLoading(true);
    fetchData().then((fetchItems) => {
      setItems(fetchItems);
      setLoading(false);
    });
  }, []);
  return (
    <Paper className={`${classes.spacing} ${classes.textCenter}`}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell
                key={column.name}
                align={column.numeric ? "right" : "inherit"}
              >
                <TableSortLabel
                  active={column.active}
                  direction={column.order}
                  onClick={onSortClick(index)}
                >
                  {column.name.toUpperCase()}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <MaybeLoading loading={loading} />
        {!loading && items.length > 0 && (
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell>{item.created.toLocaleString()}</TableCell>
                <TableCell align="right">{item.high}</TableCell>
                <TableCell align="right">{item.low}</TableCell>
                <TableCell align="right">{item.average}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </Paper>
  );
};
