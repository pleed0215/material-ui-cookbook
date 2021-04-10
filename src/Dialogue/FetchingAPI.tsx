import classes from "*.module.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  LinearProgress,
  LinearProgressProps,
  MenuItem,
  Select,
  SelectProps,
  Theme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { ChangeEventHandler, useState } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  dialog: { minHeight: 200 },
  select: { width: "100%" },
}));

interface ObjProps {
  id: number;
  name: string;
}

const fetchItems = () =>
  new Promise<Array<ObjProps>>((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
      ]);
    }, 3000);
  });

const MaybeLinearProgress: React.FC<
  LinearProgressProps & { loading: boolean }
> = ({ loading, ...props }) => (loading ? <LinearProgress {...props} /> : null);

const MaybeSelect: React.FC<SelectProps & { loading: boolean }> = ({
  loading,
  ...props
}) => (loading ? null : <Select {...props} />);

export const APIIntegration = () => {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<ObjProps[]>([]);
  const [selected, setSelected] = useState("");

  const onShowItems = () => {
    setOpen(true);
    setLoading(true);

    fetchItems().then((items: Array<ObjProps>) => {
      setLoading(false);
      setItems(items);
    });
  };

  const onClose = () => {
    setOpen(false);
  };

  const onSelect: ChangeEventHandler<{ name?: string; value: any }> = (e) => {
    setSelected(e.target.value);
  };
  return (
    <>
      <Button color="primary" onClick={onShowItems}>
        Select Item
      </Button>
      <Dialog
        open={open}
        classes={{ paper: styles.dialog }}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>Select Item</DialogTitle>
        <DialogContent>
          <MaybeLinearProgress loading={loading} />
          <MaybeSelect
            value={selected}
            onChange={onSelect}
            className={styles.select}
            loading={loading}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {items.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </MaybeSelect>
        </DialogContent>
        <DialogActions>
          <Button disabled={loading} onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button
            disabled={loading}
            variant="contained"
            onClick={onClose}
            color="primary"
          >
            Select
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
