import React from "react";
import './User.css';
import ConnectSpotify from "./ConnectSpotify";

function User(){
    return(
        <div className="user_body">
            <div className="user_container">
                <ConnectSpotify />
            </div>
        </div>
    );
}

export default User;