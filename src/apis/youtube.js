import axios from "axios";

const KEY='AIzaSyDXZAL_TUf_XV5oRyc1NNFwIVaLSw-3NCc';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        key:KEY,
        maxResults:10,
        type:'video'
    }
});