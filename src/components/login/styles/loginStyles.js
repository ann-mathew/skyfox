import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) =>

({
    loginContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
  height: "250px"
    },

    loginForm: {
        display: "flex",
        flexDirection: "column",
        width: "500px"
    },
    loginButton: {
        marginTop: "15px"
    },
    loginErrorMessage: {
        marginTop: "8px"
    },
    signUpLink: {
        display: "flex",
        justifyContent: "center"
    }
})

);
