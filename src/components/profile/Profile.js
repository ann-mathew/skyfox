import React from "react";
import styles from "./styles/profileStyles";
import { Button, Typography } from "@material-ui/core";

const Profile = (isAuthenticated) => {
  const classes = styles();

  return (
    <>
      <Typography variant="h4" className={classes.profileHeader}>
        User Profile
      </Typography>
      <Typography variant="body1" className={classes.profileItem}>
        Name: YOUR NAME
      </Typography>
      <Typography variant="body1" className={classes.profileItem}>
        Username: Email ID
      </Typography>
      <Button 
        variant="contained" 
        color="primary"
        size="large"
        className={classes.changePasswordButton}>
        CHANGE PASSWORD
      </Button>
    </>
  );
};
export default Profile;
