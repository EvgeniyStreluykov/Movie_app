import React, { useState } from "react";
import SignInForm from "./components/SignIn";
import SignUpForm from "./components/SignUp";
import { Modal } from "@mui/material";

function getModalStyle() {
  return {
    top: "50%",
    left: "50%",

    position: "absolute",
    width: 400,
    backgroundColor: "white",
    border: "2px solid #000",
    transform: `translate(-50%, -50%)`,
  };
}

const FIELDS_signUp = [
  {
    name: "userName",
    type: "userName",
  },
  {
    name: "email",
    type: "email",
  },
  {
    name: "psw",
    type: "psw",
  },
  {
    name: "confirm Psw",
    type: "c-psw",
  },
];
const FIELDS = [
  {
    name: "email",
    type: "email",
  },
  {
    name: "psw",
    type: "psw",
  },
];

export function SimpleModalSignIn(props) {
  const { openSignIn, setOpenSignIn, closeAuth } = props;

  const [email, setEmail] = useState("");

  const [pass, setPass] = useState("");

  const [error, setError] = useState("");

  const [userName, setUserName] = useState("");

  const [confirmPass, setConfirmPass] = useState("");

  const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);

  const [currentForm, setCurrentForm] = useState(1);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;

    return re.test(email);
  };

  const fieldChange =
    (type) =>
    ({ target }) => {
      const { value } = target;

      if (type === "userName") {
        setUserName(value);
        return;
      }

      if (type === "email") {
        setEmail(value);
        return;
      }

      if (type === "psw") {
        setPass(value);
        return;
      }
      if (type === "c-psw") {
        setConfirmPass(value);
        return;
      }
    };

  const isValidForm = () =>
    pass === confirmPass && pass && validateEmail(email);

  const submit = () => {
    const isValid = isValidForm();

    let errorText = "";

    if (isValid) {
      setError("");

      const userList = localStorage.getItem("users");

      if (!userList) {
        localStorage.setItem("users", []);
      }
      const users = userList ? JSON.parse(userList) : [];
      const user = { email, pass, userName };

      const isUserExist = users.find(
        (userItem) => user.email === userItem.email
      );

      if (!isUserExist) {
        localStorage.setItem("users", JSON.stringify([...users, user]));

        setIsRegistrationSuccess(true);
      } else {
        alert("user is already registered");
      }
      // set to local storage
      return;
    } else {
      if (!pass || !confirmPass || pass !== confirmPass) {
        errorText += "  passwords error";
      }
      if (!validateEmail(email)) {
        errorText += "  email error";
      }
      setError(errorText);
    }
  };

  const getValue = (type) => {
    if (type === "userName") {
      return userName;
    }

    if (type === "email") {
      return email;
    }

    if (type === "psw") {
      return pass;
    }
    if (type === "c-psw") {
      return confirmPass;
    }
  };

  const [modalStyle] = useState(getModalStyle);

  const handleOpen = () => {
    setOpenSignIn(true);
  };

  const handleClose = () => {
    setOpenSignIn(false);
  };

  const users = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  const handleSignInClick = () => {
    const user = { email, pass, userName };

    const isUserExist =
      users &&
      users.find((userItem) => {
        return user.email === userItem.email;
      });

    let errorText = "";

    if (isUserExist?.pass === pass) {
      setError("");
      localStorage.setItem("personAuth", email);
      window.dispatchEvent(
        new StorageEvent("storage", {
          key: "personAuth",
          newValue: email,
        })
      );
      closeAuth();
    } else {
      if (pass) {
        errorText += " passwords error";
      }
      setError(errorText);
    }
  };

  return (
    <div>
      <Modal
        open={openSignIn}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle}>
          {currentForm === 1 ? (
            <SignInForm
              fields={FIELDS}
              fieldChange={fieldChange}
              getValue={getValue}
              handleSignInClick={handleSignInClick}
              error={error}
            />
          ) : (
            <SignUpForm
              isRegistrationSuccess={isRegistrationSuccess}
              submit={submit}
              fields={FIELDS_signUp}
              fieldChange={fieldChange}
              getValue={getValue}
              error={error}
            />
          )}
        </div>
      </Modal>
    </div>
  );
}
