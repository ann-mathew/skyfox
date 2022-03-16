import React from "react";
import {Button} from "@material-ui/core";



const Profile = (isAuthenticated) => {
if(isAuthenticated){
return(
<h1> hello world</h1>
)
}
};
export default Profile;