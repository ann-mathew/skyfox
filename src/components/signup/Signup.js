import React, { useEffect } from "react";
import { Form, Formik } from "formik";
import { FormikSelect, FormikTextField } from "../formik";
import { Button } from "@material-ui/core";
import styles from "./styles/signupStyles"
import PropTypes from "prop-types";
import useSignup from "./hooks/useSignup";
import { formSchema, initialValues } from "./services/signupFormService";


const Signup = ({ location, history, isAuthenticated, onSignup }) => {
    const classes = styles();
    const { from } = location.state || { from: { pathname: "/" } };
    const { errorMessage, handleSignup } = useSignup(onSignup);
    const options = [
        { value: 'Age Group', label: 'Select Age Group'},
        { value: '11 - 20', label: '11 - 20' },
        { value: '21 - 30', label: '21 - 30' },
        { value: '31 - 45', label: '31 - 45' },
        {value: '45 and above', label: '45 and above'}
      ]
    useEffect(() => {
        if (isAuthenticated) {
            history.replace(from);
        }
    });

    return (
        <div className={classes.signupContainer}>
            <Formik initialValues={initialValues}
                onSubmit={handleSignup}
                validationSchema={formSchema}>
                {
                    (props) => {
                        const {
                            isValid,
                        } = props;
                        return (
                            <Form className={classes.signupForm}>
                                <FormikTextField
                                    required
                                    margin="dense"
                                    name="name"
                                    label="Name"
                                />
                                <FormikTextField
                                    required
                                    margin="dense"
                                    type="email"
                                    name="email"
                                    label="Email"
                                />
                                <FormikTextField
                                    required
                                    margin="dense"
                                    name="phone"
                                    label="Phone Number"
                                />
                                <FormikSelect 
                                    required
                                    name="age"
                                    options={options} />
                                <FormikTextField
                                    required
                                    type="password"
                                    margin="dense"
                                    name="password"
                                    label="Password"

                                />
                                <FormikTextField
                                    required
                                    type="password"
                                    margin="dense"
                                    name="cpassword"
                                    label="Confirm Password"
                                />
                                {
                                    errorMessage()
                                }

                                <Button
                                    variant="contained"
                                    type="submit"
                                    disabled={!isValid}
                                    color="primary"
                                    className={classes.signupButton}
                                >
                                    Signup
                                </Button>
                            </Form>
                        );
                    }
                }
            </Formik>
            <a href="/login" className={classes.signupContainer}>
                Already have an account? Login here
            </a>
        </div>
    );
}

Signup.propTypes = {
    location: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    onSignup: PropTypes.func.isRequired
};

export default Signup;
