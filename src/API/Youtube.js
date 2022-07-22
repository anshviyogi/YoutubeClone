import axios from 'axios'

function Youtube(){

}

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3"
})

