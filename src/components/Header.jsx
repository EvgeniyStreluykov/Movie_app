import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Navigation from "./Navigation";
import LogInBtn from "./LogInBtn";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import "../styles/header.css";

const Header = (props) => {
  const { openAuth } = props;

  const inSession = localStorage.getItem("personAuth");

  const [isAuth, setIsAuth] = useState(!!inSession);

  const [userN, setUserN] = useState("");

  useEffect(() => {
    window.addEventListener("storage", (event) => {
      if (event.key === "personAuth") {
        setIsAuth(!!event.newValue);
        const u = JSON.parse(localStorage.getItem("users"));
        const usr = u.find((el) => el.email === event.newValue);
        const userName = usr && usr.userName;
        setUserN(userName);
      }
    });
  }, []);

  const signOut = () => {
    localStorage.removeItem("personAuth");
    setIsAuth(false);
  };

  return (
    <header className="header">
      <Link to="/">
        <img
          src="https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn"
          alt="logo"
        />
      </Link>

      <Navigation />

      {isAuth ? (
        <>
          <Link to="/profile">
            <PersonOutlineIcon />
          </Link>

          <div>hello {userN}</div>
          <button onClick={signOut}>signOut</button>
        </>
      ) : (
        <LogInBtn handleClick={openAuth} />
      )}
    </header>
  );
};

export default Header;
