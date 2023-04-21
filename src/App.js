import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UserLists";

function App() {
  const [usersDataList, setUsersList] = useState([]);

  const addUserHandler = (user) => {
    setUsersList((prevUsersList) => [...prevUsersList, user]);
  };

  console.log(usersDataList);
  return (
    <>
      <AddUser onAddUsersList={addUserHandler} />
      <UsersList users={usersDataList} />
    </>
  );
}

export default App;
