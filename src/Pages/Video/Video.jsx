import React from "react";
import './Video.css'
import PlayVideo from "../../Components/PlayVideo/PlayVideo";
import Recommended from "../../Components/Recommended/Recommended";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";


const Video=()=>{
    const {videoId, categoryId} = useParams();
    const lightTheme=useSelector(state=>state.themeKey);
    return(
        <div className={"play-container" + ((lightTheme)?"" : " dark")}>
            <PlayVideo videoId={videoId}/>
            <Recommended categoryId={categoryId}/>
        </div>
    )
}

export default Video