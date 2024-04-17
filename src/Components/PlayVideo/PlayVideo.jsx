import React, { useState } from "react";
import './PlayVideo.css'
const PlayVideo=({videoId})=>{



    return(
        <div className="play-video">
            {/* width="560" height="315"  */}
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; autoplay; picture-in-picture; web-share" allowfullscreen></iframe>
            <h3>Best youtube channel you have landed on</h3>
            <hr />
            <div className="publisher">
            
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCsYj8-Oj5u-SgEQIU9sQJyqpF76n335Bhjr3J8Bg_g&s" alt="" />
                <div id="channelinfo">
                    <p>Great Video</p>
                    <span>1 M Subscribers</span>
                </div>
                <button>Subscribe</button>
                <div id="channelinforeact">
                    <span><i className="material-icons video-material-icons">thumb_up</i><span class="hit-react">234</span></span>
                    <span><i className="material-icons video-material-icons">thumb_down</i><span class="hit-react">23</span></span>
                    <span><i className="material-icons video-material-icons">share</i><span class="hit-react">Like</span></span>
                    <span><i className="material-icons video-material-icons">download</i><span class="hit-react">Dislike</span></span>
                </div>
            </div>
            <div className="vid-description">
                <p>Channel that makes learning easy</p>
                <p>Subscribe to my channel</p>
                <hr />
                <h4>130 comments</h4>
                <div className="comment">
                    <img src="https://i.pinimg.com/236x/3e/a9/47/3ea947c7c2ae57d763a9442fee8f1f2a.jpg" alt="" />
                    <div>
                        <h3>Jocky<span>1 day ago</span></h3>
                        <p>The video provides us a great learingj elsdf Lorem ipsum dolor sit amet.</p>
                        <div className="comment-action">
                            <i className="material-icons">thumb_up</i>
                            <span>456</span>
                            <i className="material-icons">thumb_down</i>
                            <span>67</span>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src="https://i.pinimg.com/236x/3e/a9/47/3ea947c7c2ae57d763a9442fee8f1f2a.jpg" alt="" />
                    <div>
                        <h3>Jocky<span>1 day ago</span></h3>
                        <p>The video provides us a great learingj elsdf Lorem ipsum dolor sit amet.</p>
                        <div className="comment-action">
                            <i className="material-icons">thumb_up</i>
                            <span>456</span>
                            <i className="material-icons">thumb_down</i>
                            <span>67</span>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src="https://i.pinimg.com/236x/3e/a9/47/3ea947c7c2ae57d763a9442fee8f1f2a.jpg" alt="" />
                    <div>
                        <h3>Jocky<span>1 day ago</span></h3>
                        <p>The video provides us a great learingj elsdf Lorem ipsum dolor sit amet.</p>
                        <div className="comment-action">
                            <i className="material-icons">thumb_up</i>
                            <span>456</span>
                            <i className="material-icons">thumb_down</i>
                            <span>67</span>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src="https://i.pinimg.com/236x/3e/a9/47/3ea947c7c2ae57d763a9442fee8f1f2a.jpg" alt="" />
                    <div>
                        <h3>Jocky<span>1 day ago</span></h3>
                        <p>The video provides us a great learingj elsdf Lorem ipsum dolor sit amet.</p>
                        <div className="comment-action">
                            <i className="material-icons">thumb_up</i>
                            <span>456</span>
                            <i className="material-icons">thumb_down</i>
                            <span>67</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PlayVideo;