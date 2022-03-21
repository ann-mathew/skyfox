import {Button, Dialog} from "@material-ui/core";
import React from "react";
import styles from "./styles/movieScheduleDialogStyles"

const MovieScheduleDialog = ({open, onClose}) => {
    const classes = styles();

    return (
        <>
            <Dialog open={open} onClose={onClose} fullWidth classes={{paper: classes.dialogRoot}}>
                <div className={classes.container}>
                    <Button variant="contained" color="primary">SCHEDULE</Button>
                </div>
            </Dialog>
        </>
    );
}


export default MovieScheduleDialog;