import React, { useEffect } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import SearchBar from './Components/SearchBar'
import VideoDetail from './Components/VideoDetail'
import VideoList from './Components/VideoList'
import {useState} from 'react'
import youtube from './API/Youtube'

function App(){

const[videos,setVideos] = useState([])
const[clickVideo,setClickVideo] = useState(null)
const selectedVideo = clickVideo != null ? clickVideo :(videos.length!=0 ? videos[0]:null)

async function handleSubmit(searchTerm){
    const response = await youtube.get("search",{
        params:{
      part:"snippet",
      maxResults:5,
      key:"AIzaSyB0RJJLijsMDYE5WvdWGGgdPP0rrtmCHFw",
      q:searchTerm      
        }
    })
    setVideos(response.data.items)
    
}

const onVideoClick = (video)=>{
    setClickVideo(video)
}

useEffect(()=>{
handleSubmit("marval")

},[])
    return(
        <div className='App'>
            <Container>
                <SearchBar onSubmit={handleSubmit}/>
                <Row>
                    <Col sm={8}>
                        <VideoDetail video={selectedVideo}/>
                    </Col>
                    <Col sm={4}>
                        <VideoList videos={videos} onVideoSelect={onVideoClick}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default App
