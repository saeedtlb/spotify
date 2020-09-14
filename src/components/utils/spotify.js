const BASE_URI = 'https://accounts.spotify.com/authorize';
const CLIENT_ID = '5c15d7c30b744d5b8f8e435f01c9f405';
const REDIRECT_URI = 'http://localhost:3000/';
const SCOPES = [
    'user-read-email',
    'user-read-playback-state',
    'streaming',
    'user-top-read',
    'user-read-currently-playing',
    'user-read-recently-played',
    'playlist-read-private',
    'user-modify-playback-state',
];

export const accessUrl = `${BASE_URI}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}
&scope=${SCOPES.join('%20')}&response_type=token&show_dialog=true`;
