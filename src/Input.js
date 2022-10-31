
import { useState } from "react";
import './Input.css';
export let playlistIncomingData = {data: 'none'}
let waitingFordata;
function Postdata(){
    const [playlist_id, setplaylist_id] = useState('');
    const [inputValue, setInputValue] = useState("");
    const [convertStatus, setconvertStatus] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        setInputValue("");
        const rawid = playlist_id;
        const id = rawid.split('list=')[1];
      
        const inputInfo = {
            playlist_id: {id}
        }
        const options = {
            method: "POST",
             headers: {
                'Content-type': "application/json"
            },
           body: JSON.stringify(inputInfo)
        }
        fetch("/home", options)
        .then(res => res.json())
        .then(data => waitingFordata = data)
        function waitForPlaylistData(){
            if(typeof waitingFordata !== "undefined"){
                playlistIncomingData = {data: waitingFordata};
                setconvertStatus(true);
            }else{
                setTimeout(waitForPlaylistData, 250);
                setconvertStatus(false)
            }
        }
        waitForPlaylistData();
    }

    function updateValues(e){
        setplaylist_id(e.target.value);
        setInputValue(e.target.value);
    }
    return(
        <div className="input_body">
            <form onSubmit={handleSubmit}>
                <div className="input_box"><input className="input_input" type="text" placeholder="ENTER YOUTUBE PLAYLIST LINK/URL......" value={inputValue} onChange={(e) => updateValues(e)} required/></div>
            </form>
            <div className={convertStatus !== false ? "can_convert_btn" : "no_convert_btn"}>CONVERT</div>
        </div>
  );
}
export default Postdata;