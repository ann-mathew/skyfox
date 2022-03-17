import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) =>
    ({
        profileHeader: {
            padding: "15px 0 10px 25px",
            display: "flex",
            fontWeight: "bold",
            alignSelf: "center"
        },
        profileItem: {
            padding: "8px 0 0 25px",
        },
        changePasswordButton: {
            margin: "25px",
        }
    })
);
