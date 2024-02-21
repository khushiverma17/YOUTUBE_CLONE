import React from "react";
import './PlayVideo.css'
const PlayVideo=()=>{
    return(
        <div className="play-video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9xm5XmHCkMU?si=pB6v5wFvir-5U-Sp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h3>Best youtube channel you have landed on</h3>
            {/* <div className="play-video-info">
                {/* <p>1234 Views &bull; 2days ago</p> */}
                
            {/* </div> */} 
            <hr />
            <div className="publisher">
            
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCsYj8-Oj5u-SgEQIU9sQJyqpF76n335Bhjr3J8Bg_g&s" alt="" />
                <div id="channelinfo">
                    <p>Great Video</p>
                    <span>1 M Subscribers</span>
                </div>
                <button>Subscribe</button>
                <div id="channelinforeact">
                    <span><i className="material-icons video-material-icons">thumb_up</i>234</span>
                    <span><i className="material-icons video-material-icons">thumb_down</i>23</span>
                    <span><i className="material-icons video-material-icons">share</i>Like</span>
                    <span><i className="material-icons video-material-icons">download</i>Dislike</span>
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