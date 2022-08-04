import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import "../styles/profile.css";

const Profile = () => {
  return (
    <div>
      <div className="userProfileContainer profile">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus facilis
        culpa laboriosam quam iusto expedita quaerat sunt fugiat dolorem amet
        ipsum delectus illo vel nihil, ad provident autem eveniet soluta.
        <Button>
          <Link to={"/"}>Go Back</Link>
        </Button>
      </div>
    </div>
  );
};

export default Profile;
