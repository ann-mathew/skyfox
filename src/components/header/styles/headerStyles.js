import {makeStyles} from "@material-ui/core";

export default makeStyles((theme) => ({
        headerLink: {
            color: theme.palette.primary.contrastText,
            display: 'flex',
            justifyContent: "flex-start",
            textDecoration: 'none'
        },
        logoutLink: {
            display: 'flex',
            justifyContent: "flex-start",
            alignItems: "center",
            cursor: "pointer",
            marginLeft: '15px'
        },
        profileLink: {
            display: 'flex',
            justifyContent: "flex-end",
            alignItems: "right",
            height: "20px"
        },
        profileLinkIcon: {
            margin: "0 5px",
            textDecoration: "none",
            color: "white",
            lineHeight: "30px"
        },
        headerDivision: {
            display: 'flex',
            justifyContent: "flex-end"
        },
        cinemaLogoIcon: {
            fontSize: '2.25em'
        },
        headerLogo: {
            marginLeft: '0.15em',
     },
        toolbar: {
            display: 'flex',
            justifyContent: "space-between",
            padding: "0 4em"
        },
        cartButton: {
            color: "white",
            padding: "10px"
        }
    })
);
