import {
  Button,
  Fade,
  Grid,
  Grow,
  Slide,
  Snackbar,
  SnackbarProps,
} from "@material-ui/core";
import React, { useState } from "react";

interface IMySnackbar extends SnackbarProps {
  transition: "slide" | "grow" | "fade";
  direction?: "up" | "down" | "left" | "right";
}

const MySnackbar: React.FC<IMySnackbar> = ({
  transition = "slide",
  direction = "down",
  children,
  ...rest
}) => (
  <Snackbar
    TransitionComponent={
      {
        slide: Slide,
        grow: Grow,
        fade: Fade,
      }[transition]
    }
    /*
    // @ts-ignore */
    TransitionProps={{ direction }}
    {...rest}
  />
);

export const SnackbarTransition = () => {
  const [first, setFirst] = useState<boolean>(false);
  const [second, setSecond] = useState<boolean>(false);
  const [third, setThird] = useState<boolean>(false);
  const [fourth, setFourth] = useState<boolean>(false);
  return (
    <>
      <Grid container spacing={8}>
        <Grid item>
          <Button variant="contained" onClick={() => setFirst(true)}>
            Slide Down
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={() => setSecond(true)}>
            Slide Up
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={() => setThird(true)}>
            Grow
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={() => setFourth(true)}>
            Fade
          </Button>
        </Grid>
        <MySnackbar
          open={first}
          onClose={() => setFirst(false)}
          autoHideDuration={5000}
          message="Slide Down"
          transition="slide"
          direction="down"
        />
        <MySnackbar
          open={second}
          onClose={() => setSecond(false)}
          autoHideDuration={5000}
          message="Slide Up"
          transition="slide"
          direction="up"
        />
        <MySnackbar
          open={third}
          onClose={() => setThird(false)}
          autoHideDuration={5000}
          message="Grow"
          transition="grow"
        />
        <MySnackbar
          open={fourth}
          onClose={() => setFourth(false)}
          autoHideDuration={5000}
          message="Fade"
          transition="fade"
        />
      </Grid>
    </>
  );
};
