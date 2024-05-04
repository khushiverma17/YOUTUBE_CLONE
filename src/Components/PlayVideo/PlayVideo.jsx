import React, { useEffect, useState } from "react";
import './PlayVideo.css'
import { valueConvertor } from "../../data";
import moment from "moment";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const API_KEY = import.meta.env.VITE_API_KEY;


const PlayVideo = () => {
    const {videoId} = useParams();
    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);
    const lightTheme=useSelector(state=>state.themeKey);



    const fetchVideoData = async () => {
        //fetching videos data
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videoDetails_url).then(res => res.json()).then(data => setApiData(data.items[0]))
    }

    const fetchOtherData = async () => {
        //fetching channel data
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
        await fetch(channelData_url).then(res => res.json()).then(data => setChannelData(data.items[0]))

        //fetching comments data
        const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2C%20replies&maxResults=50&videoId=${videoId}&key=${API_KEY}`
        await fetch(comment_url).then(res => res.json()).then(data => setCommentData(data.items))

    }

    useEffect(() => {
        fetchVideoData();
    }, [videoId])

    // fetchVideoData should executed first than fetchOtherData

    useEffect(() => {
        fetchOtherData();
    }, [apiData])


    return (
        <div className={"play-video" + ((lightTheme)?"" : " dark")}>
            {/* width="560" height="315"  */}
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; autoplay; picture-in-picture; web-share" allowfullscreen></iframe>
            <h3 className={(lightTheme)?"" : " darkwhite"}>{apiData ? apiData.snippet.title : "Title Here"}</h3>
            <br />
            <p>{apiData ? valueConvertor(apiData.statistics.viewCount) : "16K"} views &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : "2"}</p>
            <hr />
            <div className={"publisher" + ((lightTheme)?"" : " dark")}>

                <img src={channelData ? channelData.snippet.thumbnails.default.url : ""} alt="" />
                <div id="channelinfo">
                    <p className={(lightTheme)?"" : " darkwhite"}>{apiData ? apiData.snippet.channelTitle : "Channel Name here"}</p>
                    <span>{channelData ? valueConvertor(channelData.statistics.subscriberCount) : "1M"} Subscribers</span>
                </div>
                <button>Subscribe</button>
                <div id="channelinforeact">
                    <span><i className="material-icons">thumb_up</i><span class="hit-react">{apiData ? valueConvertor(apiData.statistics.likeCount) : "20"}</span></span>
                    {" "}
                    <span><i className="material-icons">thumb_down</i></span>
                    <span><i className="material-icons">share</i></span>
                    <span><i className="material-icons">download</i></span>
                </div>
            </div>
            <div className={"vid-description" + ((lightTheme)?"" : " dark")}>
                <p className={(lightTheme)?"" : " darkwhite"}>{apiData ? apiData.snippet.localized.description.slice(0, 250) : "Description here"}</p>

                <hr />
                <h4>{apiData ? valueConvertor(apiData.statistics.commentCount) : "10"} comments</h4>
                {commentData.map((item, index) => {
                    return (
                        <div key={index} className={"comment" + ((lightTheme)?"" : " dark")}>
                            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                            <div>
                                <h3 className={(lightTheme)?"" : " darkwhite"}>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
                                <p>{item.snippet.topLevelComment.snippet.textDisplay.slice(0, 300)}</p>
                                <div className={"comment-action" + ((lightTheme)?"" : " dark")}>
                                    <i className="material-icons">thumb_up</i>
                                    <span className={"likecomment" + ((lightTheme)?"" : " dark")}>{valueConvertor(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                    <i className="material-icons">thumb_down</i>
                                </div>
                            </div>
                        </div>
                    )
                })}


            </div>
        </div>
    )
}
export default PlayVideo;