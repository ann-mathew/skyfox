import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) =>
    ({
        signupContainer: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            minHeight: "100px",
            float: "center"
        },
    
        signupForm: {
            display: "flex",
            flexDirection: "column",
            width: "500px"
        },

        signupButton: {
            marginTop: "15px"
        },

        signupErrorMessage: {
            marginTop: "8px"
        },
        
        signUpLink: {
            display: "flex",
            justifyContent: "center"
        }
    })
);
