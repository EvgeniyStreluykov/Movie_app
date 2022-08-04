import React from "react";
import { Button, TextField } from "@mui/material";

const SignUpForm = (props) => {
  const {
    isRegistrationSuccess,
    submit,
    fields,
    fieldChange,
    getValue,
    error,
  } = props;

  return (
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
        id="registr"
        onClick={submit}
        variant="contained"
        color="secondary"
        // disabled={!isValidForm()}
      >
        Зарегестрироваться
      </Button>
      {isRegistrationSuccess && <div>user registr</div>}
      {error}
    </form>
  );
};

export default SignUpForm;
