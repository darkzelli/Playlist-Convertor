import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import './ConnectSpotify.css';
import { getTokenFromURL, loginURl } from '../SPauthorization.js'
import SpotifyWebApi from 'spotify-web-api-js';
import Input from '../Input.js'


const spotify = new SpotifyWebApi();

function ConnectSpotify(){
    const [connected, setconnected] = useState(false);

    useEffect(() => {
        (async () => {
            const hash = getTokenFromURL();
            window.location.hash = "";
            const token = hash.access_token;

            if(token){
                setconnected(true);

                spotify.setAccessToken(token);
                const user = await spotify.getMe()
                console.log(user);
            }
        })();

    }, []);

    let InputComponetRender;
    if(connected === true){
        InputComponetRender = <Input />;
    }


    return(
        <div className="spotify_body">
            <div className="spotify_top">
                <a className={connected === true ? "spotify_auth" : "none"} href={connected === false ? loginURl : "/"}>
                    <div className={connected === false ? "spotify_container_un" : "spotify_container_cn"}>
                        <FontAwesomeIcon className={connected === false ? "spotify_icon_un" : "spotify_icon_cn"} icon={faSpotify}></FontAwesomeIcon>
                        <b>
                            {connected === false ? 'CONNECT SPOTIFY' : '' }
                        </b>
                    </div>
                </a>
                <div>
                    {InputComponetRender}
                </div>
            </div>
        </div>
    );

}

export default ConnectSpotify;