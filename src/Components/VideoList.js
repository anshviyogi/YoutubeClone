import VideoItem from './VideoItem'
function VideoList({videos,onVideoSelect}){
    if(videos.length === 0){
        return <h1>Loading...</h1>
    }
return(
    <>
    {videos.map((video,idx) => <VideoItem key={idx} videoItem={video} onVideoSelect={onVideoSelect}/>)}
    </>
)
}

export default VideoList
