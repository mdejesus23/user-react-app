import React from "react";

import UserForm from "./UserForm";

const AddUser = (props) => {
  const saveUserList = (enteredUserList) => {
    const userData = {
      ...enteredUserList,
      id: Math.random().toString(),
    };
    console.log(userData);
    props.onAddUsersList(userData);
  };

  return (
    <div>
      <UserForm onSaveUserList={saveUserList} />
    </div>
  );
};

export default AddUser;
