import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import Wrapper from "../Helpers/Wrapper";
import ErrorModal from "../Modal/ErrorModal";

import classes from "./UserForm.module.css";

const UserForm = (props) => {
  // we're using useRef instead of a useState to get the value of the user input.
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState(undefined);

  const addUserHandler = (event) => {
    event.preventDefault(); // code to avoid reloading the whole web page.
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (not an empty values).",
      });
      return;
      // +enteredAge convert string to number data type.
    } else if (+enteredUserAge < 5) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    const userData = {
      username: enteredName,
      userAge: enteredUserAge,
    };

    props.onSaveUserList(userData);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => setError(undefined);

  return (
    <Wrapper>
      {error && ( // if error is an object? render ErrorModal component
        <ErrorModal
          title={error.title}
          message={error.message}
          onCloseModal={errorHandler}
        />
      )}
      <Card className={classes.input}>
        {error === undefined && ( // if error is undefined? render UserForm component.
          <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" ref={nameInputRef} />
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" ref={ageInputRef} />
            <Button type="submit">Add User</Button>
          </form>
        )}
      </Card>
    </Wrapper>
  );
};

export default UserForm;
