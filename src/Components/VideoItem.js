import {Row,Col,Container} from 'react-bootstrap'

function VideoItem({videoItem,onVideoSelect}){
    
return(
    <>
    <Container>
    <Row onClick={()=>onVideoSelect(videoItem)}>
        <Col sm={8} style={{marginBottom:"20px"}}>
        <img src={videoItem.snippet.thumbnails.high.url} width="200"></img>
        </Col>
 
        <Col sm={4}>
<h6>{videoItem.snippet.title}</h6>
        </Col>
    </Row>
    </Container>
    </>
)
}

export default VideoItem