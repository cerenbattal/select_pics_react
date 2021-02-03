import axios from 'axios'

export default axios.create({
    baseURL: "https://api.unsplash.com/", 
    headers: {
        Authorization: "Client-ID 7HmEclJKxczvUP9swKCxXuptgffLF-UVVBl63HCc-Es",
    },
});