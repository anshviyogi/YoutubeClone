import {Card} from 'react-bootstrap'
function VideoDetail({video}){

  if(!video) return <h1>Loading...</h1>
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return(
        <>
    <Card>
    <iframe height="400" src={videoSrc}></iframe>
        <Card.Body>
          <Card.Title>{video.snippet.title}</Card.Title>
          <Card.Text>
            {video.snippet.description}
          </Card.Text>
        </Card.Body>
      </Card>
      
    </>
    )
}

export default VideoDetail