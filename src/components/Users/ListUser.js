import React from "react";

import classes from "./ListUser.module.css";

const ListUser = (props) => {
  return (
    <div>
      <ul>
        <li>{props.username} {props.userAge}</li>
      </ul>
    </div>
  );
};

export default ListUser;
