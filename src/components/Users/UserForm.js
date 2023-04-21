import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../Modal/ErrorModal";

import classes from "./UserForm.module.css";

const UserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isValid, setIsValid] = useState(true);

  const addUserHandler = (event) => {
    event.preventDefault(); // code to avoid reloading the whole web page.

    if (enteredUsername.trim().length === 0) {
      setIsValid(false);
      return;
    } else if (enteredAge.trim().length === 0 || +enteredAge < 5) {
      // +enteredAge convert string to number data type.
      setIsValid(false);
      return;
    }

    const userData = {
      username: enteredUsername,
      userAge: enteredAge,
    };

    props.onSaveUserList(userData);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const isValidChangeHandler = (show) => {
    setIsValid(isValid === show);
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      {isValid === false && <ErrorModal />}
      {isValid === true && (
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      )}
    </Card>
  );
};

export default UserForm;
