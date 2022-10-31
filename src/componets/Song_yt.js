import React, { useState, useEffect } from "react";
import './Song_yt.css';


function Song_yt({ songData }){
    const [recievedData, setrecievedData] = useState([]);

    useEffect(() => {
        (async () => {
            function checkData(){
                const checker = [];
                if(songData !== checker){
                    const title = songData.snippet.title;
                    let formatted_title = title;
                    if(title.length > 25){
                        formatted_title = title.substring(0,25) + "...";
                    }
                    setrecievedData(formatted_title);
                }else{
                    setTimeout(checkData, 250);
                }
            }
            checkData();
        })();
    })

    return(
        <div className="song_body">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <div className="song_container">
                <ul className="song_list">
                    <li>
                        <p className="song_title">{recievedData}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Song_yt;