import React from "react";
import '../css/videoItem.css'

const VideoItem = ({video,onVideoSelect})=>{
    return (
        <div onClick={(e)=>{onVideoSelect(video)}} className="video-item item">
            <img 
                className="ui image"
                alt={video.snippet.description}
                src={video.snippet.thumbnails.high.url}
            />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div> 
            </div>
        </div>
    )
}
export default VideoItem;