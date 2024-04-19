import React, { useEffect, useState } from "react";
import './Recommended.css';
import { valueConvertor } from "../../data";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const API_KEY = import.meta.env.VITE_API_KEY;

const Recommended = ({ categoryId }) => {
    const lightTheme=useSelector(state=>state.themeKey);

    const [apiData, setApiData] = useState([]);

    const fetchData = async () => {
        const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
        await fetch(relatedVideo_url).then(res => res.json()).then(data => setApiData(data.items))

    }

    // When you don't pass any dependencies to the useEffect hook, it means that the effect will run after every render of the component.
    useEffect(() => {
        fetchData();
    }, [])


    return (
        <div className={"recommended" + ((lightTheme)?"" : " dark")}>
            {apiData.map((item, index) => {
                return (
                    <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className={"side-video-list" + ((lightTheme)?"" : " dark")}>
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <div className={"vid-info" + ((lightTheme)?"" : " dark")}>
                            <h4 className={"sidevideodata" + ((lightTheme)?"" : " darkwhite")}>{item.snippet.title}</h4>
                            <p className={"sidevideodata" + ((lightTheme)?"" : " dark")}>{item.snippet.channelTitle}</p>
                            <p className={"sidevideodata" + ((lightTheme)?"" : " dark")}>{valueConvertor(item.statistics.viewCount)} Views</p>
                        </div>
                    </Link>
                )
            })}


        </div>
    )
}
export default Recommended;