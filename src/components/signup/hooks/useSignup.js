import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import styles from "../styles/signupStyles"

export default (onSignup) => {
    const classes = styles();
    const [showError, setShowError] = useState(false);

    const errorMessage = () => {
        if (showError) {
            return (
                <Typography variant="body1" color="error" className={classes.signupErrorMessage}>
                    Signup failed
                </Typography>
            )
        }
    };

    const handleSignup = async (values) => {
        const {name, email, phone, age, password, cpassword} = values;
        try {
            await onSignup(name, email, phone, age, password, cpassword);
            setShowError(false);
        } catch (err) {
            if (err.response && err.response.status === 401) {
                setShowError(true);
            } else {
                throw err;
            }
        }
    };

    return {
        errorMessage: errorMessage,
        handleSignup: handleSignup
    };
};
