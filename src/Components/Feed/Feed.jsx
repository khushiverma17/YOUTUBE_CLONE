// import React, { useEffect, useState } from 'react';
// import './Feed.css';
// import { Link } from 'react-router-dom';
// import { API_KEY, valueConvertor } from '../../data'
// import moment from 'moment';



// const Feed = ({ category }) => {
//     const [data, setData] = useState([]);
//     const fetchData = async () => {
//         const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
//         await fetch(videoList_url).then(response => response.json()).then(data => setData(data.items));
//     }

//     useEffect(() => {
//         console.log("category is now "+category);
//         fetchData();
//     }, [category])


//     return (
//         <div className="feed">
//             {data.map((item, index) => {
//                 return (
//                     <Link key={item.id} to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
//                         <img src={item.snippet.thumbnails.medium.url}alt="" />
//                         <h2>{item.snippet.title}</h2>
//                         {/* channel name */}
//                         <h3>{item.snippet.channelTitle}</h3>
//                         <p className='viewandday'>{valueConvertor(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
//                         {/* </div> */}
//                     </Link>
//                 )
//             })}


//         </div>
//     )
// }

// export default Feed;


import React, { useEffect, useState } from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';
// import {API_KEY} from '../../../myData.env'
import { valueConvertor } from '../../data';
import moment from 'moment';

const API_KEY=process.env.API_key

const Feed = ({ category }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    const fetchData = async () => {
        try {
            const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
            const response = await fetch(videoList_url);
            const responseData = await response.json();
            console.log(responseData); // Log fetched data
            setData(responseData.items);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false); // Set loading state to false regardless of success or error
        }
    };
    

    useEffect(() => {
        console.log("category is now " + category);
        fetchData();
    }, [category]);

    return (
        <div className="feed">
            {loading ? (
                <p>Loading...</p>
            ) : (
                data.map((item, index) => (
                    <Link key={item.id} to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <h2>{item.snippet.title}</h2>
                        {/* channel name */}
                        <h3>{item.snippet.channelTitle}</h3>
                        <p className='viewandday'>{valueConvertor(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                    </Link>
                ))
            )}
        </div>
    );
};

export default Feed;
