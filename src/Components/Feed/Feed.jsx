import React, { useEffect, useState } from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';
import moment from 'moment';
import {valueConvertor} from '../../data'

const API_KEY = import.meta.env.VITE_API_KEY;



const Feed = ({ category }) => {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
        await fetch(videoList_url).then(response => response.json()).then(data => setData(data.items));
    }

    useEffect(() => {
        console.log("category is now "+category);
        fetchData();
    }, [category])


    return (
        <div className="feed">
            {data.map((item, index) => {
                return (
                    <Link key={item.id} to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
                        <img src={item.snippet.thumbnails.medium.url}alt="" />
                        <h2>{item.snippet.title}</h2>
                        {/* channel name */}
                        <h3>{item.snippet.channelTitle}</h3>
                        <p className='viewandday'>{valueConvertor(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                        {/* </div> */}
                    </Link>
                )
            })}


        </div>
    )
}

export default Feed;

