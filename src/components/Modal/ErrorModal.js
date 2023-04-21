import React from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    // using props to pass errorHandler from useForm parent element to ErrorModal child element.
    <div className={classes.backdrop} onClick={props.onCloseModal}>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onCloseModal}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
