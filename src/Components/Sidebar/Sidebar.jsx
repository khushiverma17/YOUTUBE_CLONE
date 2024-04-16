import React from "react";
import './Sidebar.css'


// ({sidebar, category, setCategory}): This is the destructuring of props in the parameter list of the function. It means that the function expects an object with properties sidebar, category, and setCategory.
// In React, "props" (short for properties) are a fundamental concept used for passing data from one component to another. Props are immutable and are passed from parent components down to their children. They allow you to customize and configure React components dynamically.
    const Sidebar = ({sidebar,category,setCategory}) => {
        return (
        // here we are providing two classname to div => first one is sidebar and second is variable
        //which works according to the current value of sidebar
        <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons&display=swap" />
            <div className="nav">
                <div className="topofyouinnav sectionofnav">
                    <a href="" className={`side-link ${category===0?"active":""}`}  onClick={()=>setCategory(0)}>
                        <i className="material-icons sidebaricons">home</i>
                        <span>Home</span>
                    </a>
                    <a href="" className={`side-link ${category===42?"active":""}`}  onClick={()=>setCategory(42)}>
                        <i className="material-icons sidebaricons">slow_motion_video</i>
                        <span>Shorts</span>
                    </a>
                    <a href="" className={`side-link ${category===0?"active":""}`}  onClick={()=>setCategory(0)}>
                        <i className="material-icons sidebaricons">subscriptions</i>
                        <span>Subscriptions</span>  
                    </a>
                </div>
                <div className="youinnav sectionofnav">
                    <a href="" className={`side-link ${category===0?"active":""}`}  onClick={()=>setCategory(0)}><span>You</span>
                        <i className="material-icons">chevron_right</i>
                    </a>
                    <a href="" className={`side-link ${category===0?"active":""}`}  onClick={()=>setCategory(0)} >
                        <i className="material-icons">account_box</i>
                        <span>Your Channel</span>
                    </a>
                    <a href="" className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                        <i className="material-icons">history</i>
                        <span>History</span>
                    </a>
                    <a href="" className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                        <i className="material-icons">smart_display</i>
                        <span>Your Videos</span>
                    </a>
                    <a href="" className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                        <i className="material-icons">timelapse</i>
                        <span>Watch Later</span>
                    </a>
                    <a href="" className={`side-link ${category===0?"active":""}`}  onClick={()=>setCategory(0)}>
                        <i className="material-icons">download</i>
                        <span>Downloads</span>
                    </a>
                    <a href="" className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                        <i className="material-icons">thumb_up</i>
                        <span>Liked Videos</span>
                    </a>
                </div>
            
                <div className="explore sectionofnav">
                    <span className="explorepoint notbutton">Explore</span>
                    <a href="" className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                        <i className="material-icons sidebaricons">local_fire_department</i>
                        <span>Trending</span>
                    </a>
                    <a href="" className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                        <i className="material-icons sidebaricons">shopping_bag</i>
                        <span>Shopping</span>
                    </a>
                    <a href="" className={`side-link ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
                        <i className="material-icons sidebaricons">music_note</i>
                        <span>Music</span>
                    </a>
                    <a href="" className={`side-link ${category===30?"active":""}`} onClick={()=>setCategory(30)}>
                        <i className="material-icons sidebaricons">theaters</i>
                        <span>Movies</span>
                    </a>
                    <a href="" className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                        <i className="material-icons sidebaricons">stream</i>
                        <span>Live</span>
                    </a>
                    <a href="" className={`side-link ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
                        <i className="material-icons sidebaricons">sports_esports</i>
                        <span>Gaming</span>
                    </a>
                    <a href="" className={`side-link ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
                        <i className="material-icons sidebaricons">feed</i>
                        <span>News</span>
                    </a>
                    <a href="" className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
                        <i className="material-icons sidebaricons">emoji_events</i>
                        <span>Sports</span>
                    </a>
                    <a href="" className={`side-link ${category===27?"active":""}`} onClick={()=>setCategory(27)}>
                        <i className="material-icons sidebaricons">emoji_objects</i>
                        <span>Learning</span>
                    </a>
                    <a href="" className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                        <i className="material-icons sidebaricons">podcasts</i>
                        <span>Podcasts</span>
                    </a>
                </div>
                <div className="morefromyoutube sectionofnav">
                    <span className="moreFromYoutube notbutton">More from YouTube</span>
                    <a href="" className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                        <i className="material-icons sidebaricons">feed</i>
                        <span>YouTube Premium</span>
                    </a>
                    <a href="" className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                        <i className="material-icons sidebaricons">emoji_events</i>
                        <span>YouTube Studio</span>
                    </a>
                    <a href="" className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                        <i className="material-icons sidebaricons">emoji_objects</i>
                        <span>YouTube Music</span>
                    </a>
                    <a href="" className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                        <i className="material-icons sidebaricons">podcasts</i>
                        <span>YouTube Kids</span>
                    </a>
                </div>
                <div className="settingsandall sectionofnav">
                <a href="" className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                        <i className="material-icons sidebaricons">settings</i>
                        <span>Settings</span>
                    </a>
                    <a href="" className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                        <i className="material-icons sidebaricons">flag</i>
                        <span>Report History</span>
                    </a>
                    <a href="" className="side-link" onClick={()=>setCategory(0)}>
                        <i className="material-icons sidebaricons">help</i>
                        <span>Help</span>
                    </a>
                    <a href="" className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                        <i className="material-icons sidebaricons">chat</i>
                        <span>Send Feedback</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar























