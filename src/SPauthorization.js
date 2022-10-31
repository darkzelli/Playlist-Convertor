import { client_id } from "./client_info";


export const authEndpoint = "https://accounts.spotify.com/authorize?";
const redirect_uri = 'http://localhost:3000/';
const scopes = 'playlist-modify-public';

export const getTokenFromURL = () => {
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
    }, {});
}

export const loginURl = `${authEndpoint}client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes}&response_type=token&show_dialog=false`;

