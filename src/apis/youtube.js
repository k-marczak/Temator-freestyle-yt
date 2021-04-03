import axios from 'axios';
const KEY = 'AIzaSyBXkVQtiEwGFxIMLP7XyXUQwS8-yx4XW_c'; 

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 15,
        key: KEY
    }
})