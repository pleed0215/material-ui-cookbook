import { Snackbar, Theme, WithStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react";

const styles = (theme: Theme) => ({
  error: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
});

interface Props extends WithStyles<typeof styles> {}
interface State {
  error: Error | null;
}

const ErrorBoundary = withStyles(styles)(
  class extends React.Component<Props, State> {
    state = { error: null };
    onClose = () => {
      this.setState({ error: null });
    };

    componentDidCatch(error: Error) {
      this.setState({ error });
    }

    render() {
      const { classes } = this.props;

      return (
        <>
          {this.state.error === null && this.props.children}
          <Snackbar
            open={Boolean(this.state.error)}
            /*
            // @ts-ignore */
            message={this.state.error !== null && this.state.error?.toString()}
            ContentProps={{ classes: { root: classes.error } }}
          />
        </>
      );
    }
  }
);

const MyButton = () => {
  throw new Error("Random error");
};

export const ErrorBoundaryExam = () => {
  return (
    <ErrorBoundary>
      <MyButton />
    </ErrorBoundary>
  );
};
