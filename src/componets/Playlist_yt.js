import React, {useState, useEffect} from "react";
import './Playlist_yt.css';
import Songyt from "./Song_yt";
import { playlistIncomingData } from "../Input";

function Playlist_yt(){
    const [recievedData, setrecievedData] = useState([]);

    useEffect(() => {
        (async () => {
            function checkData(){
                if(playlistIncomingData.data !== 'none'){
                    setrecievedData(playlistIncomingData.data.playlist_data.items);
                }else{
                    setTimeout(checkData, 250);
                }
            }
            checkData();
        })();
    })
    return(
        <div className="yt_body">
            <div className="yt_container">
                <div className="yt_playlist_container">
                    <div className="yt_test">
                        {recievedData.map((item, index) => (
                            <Songyt songData={item} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Playlist_yt;