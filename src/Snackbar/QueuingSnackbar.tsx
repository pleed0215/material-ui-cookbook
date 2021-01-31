import React, { useState } from "react";

import { Button, Snackbar } from "@material-ui/core";

const withMessage = (Wrapped: React.FC<{ message: (msg: string) => void }>) =>
  function WithMessage(props: any) {
    const [queue, setQueue] = useState<Array<string>>([]);
    const [open, setOpen] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    const sendMessage = (msg: string) => {
      const newQueue = [...queue, msg];
      if (newQueue.length === 1) {
        setOpen(true);
        setMessage(msg);
      }
    };

    const onClose = () => {
      setOpen(false);
    };

    const onExit = () => {
      const [msg, ...rest] = queue;
      if (msg) {
        setQueue(rest);
        setOpen(true);
        setMessage(msg);
      }
    };

    return (
      <>
        <Wrapped message={sendMessage} {...props} />
        <Snackbar
          key={message}
          open={open}
          message={message}
          autoHideDuration={4000}
          onClose={onClose}
          onExit={onExit}
        />
      </>
    );
  };

export const QueuingSnackbar = withMessage(({ message }) => {
  const [counter, setCounter] = useState<number>(0);
  const onClick = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    message(`Message ${newCounter}`);
  };

  return <Button onClick={onClick}>Message</Button>;
});
