import React from "react";
import { Button, TextField } from "@mui/material";

const SignInForm = (props) => {
  const { fields, fieldChange, getValue, handleSignInClick, error } = props;
  return (
    <>
      <form noValidate autoComplete="off">
        {fields.map((field, inx) => {
          return (
            <TextField
              key={inx}
              onChange={fieldChange(field.type)}
              value={getValue(field.type)}
              label={field.name}
            />
          );
        })}

        <Button
          id="signIn"
          onClick={handleSignInClick}
          variant="contained"
          color="secondary"
          // disabled={!isValidForm()}
        >
          войти
        </Button>
        {error}
      </form>
    </>
  );
};

export default SignInForm;
