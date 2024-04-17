import React, { useEffect, useState } from "react";
import './Recommended.css';
import { valueConvertor } from "../../data";
import { Link } from "react-router-dom";
const API_KEY = import.meta.env.VITE_API_KEY;

const Recommended = ({ categoryId }) => {

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
        <div className="recommended">
            {apiData.map((item, index) => {
                return (
                    <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <div className="vid-info">
                            <h4 className="sidevideodata">{item.snippet.title}</h4>
                            <p className="sidevideodata">{item.snippet.channelTitle}</p>
                            <p className="sidevideodata">{valueConvertor(item.statistics.viewCount)} Views</p>
                        </div>
                    </Link>
                )
            })}


        </div>
    )
}
export default Recommended;