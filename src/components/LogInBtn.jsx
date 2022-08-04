import React from "react";

import { Button } from "@mui/material";

import "../styles/btnLogIn.css";

function LogInBtn(props) {
  const { handleClick } = props;

  const onClick = () => {
    handleClick(true);
  };

  return (
    <div onClick={onClick} className="btn__logIn">
      <Button variant="contained">Sign In</Button>
    </div>
  );
}

export default LogInBtn;
