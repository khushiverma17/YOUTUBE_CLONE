import React from "react";
import './Sidebar.css'

const Sidebar = ({sidebar}) => {
    return (
        <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons&display=swap" />
            <div className="nav">
                <div className="topofyouinnav sectionofnav">
                    <a href="" className="navlink toshowsidee">
                        <i className="material-icons sidebaricons">home</i>
                        <span>Home</span>
                    </a>
                    <a href="" className="navlink toshowsidee">
                        <i className="material-icons sidebaricons">slow_motion_video</i>
                        <span>Shorts</span>
                    </a>
                    <a href="" className="navlink toshowsidee">
                        <i className="material-icons sidebaricons">subscriptions</i>
                        <span>Subscriptions</span>  
                    </a>
                </div>
                <div className="youinnav sectionofnav">
                    <a href="" className="navlink sidebar-no-icons"><span>You</span>
                        <i className="material-icons sidebar-no-icon">chevron_right</i>
                    </a>
                    <a href="" className="navlink toshowsidee">
                        <i className="material-icons sidebaricons">account_box</i>
                        <span>Your Channel</span>
                    </a>
                    <a href="" className="navlink">
                        <i className="material-icons sidebaricons">history</i>
                        <span>History</span>
                    </a>
                    <a href="" className="navlink">
                        <i className="material-icons sidebaricons">smart_display</i>
                        <span>Your Videos</span>
                    </a>
                    <a href="" className="navlink">
                        <i className="material-icons sidebaricons">timelapse</i>
                        <span>Watch Later</span>
                    </a>
                    <a href="" className="navlink toshowsidee">
                        <i className="material-icons sidebaricons">download</i>
                        <span>Downloads</span>
                    </a>
                    <a href="" className="navlink">
                        <i className="material-icons sidebaricons">thumb_up</i>
                        <span>Liked Videos</span>
                    </a>
                </div>
            
                <div className="explore sectionofnav">
                    <span className="explorepoint notbutton">Explore</span>
                    <a href="" className="navlink">
                        <i className="material-icons sidebaricons">local_fire_department</i>
                        <span>Trending</span>
                    </a>
                    <a href="" className="navlink">
                        <i className="material-icons sidebaricons">shopping_bag</i>
                        <span>Shopping</span>
                    </a>
                    <a href="" className="navlink">
                        <i className="material-icons sidebaricons">music_note</i>
                        <span>Music</span>
                    </a>
                    <a href="" className="navlink">
                        <i className="material-icons sidebaricons">theaters</i>
                        <span>Movies</span>
                    </a>
                    <a href="" className="navlink">
                        <i className="material-icons sidebaricons">stream</i>
                        <span>Live</span>
                    </a>
                    <a href="" className="navlink">
                        <i className="material-icons sidebaricons">sports_esports</i>
                        <span>Gaming</span>
                    </a>
                    <a href="" className="navlink">
                        <i className="material-icons sidebaricons">feed</i>
                        <span>News</span>
                    </a>
                    <a href="" className="navlink">
                        <i className="material-icons sidebaricons">emoji_events</i>
                        <span>Sports</span>
                    </a>
                    <a href="" className="navlink">
                        <i className="material-icons sidebaricons">emoji_objects</i>
                        <span>Learning</span>
                    </a>
                    <a href="" className="navlink">
                        <i className="material-icons sidebaricons">podcasts</i>
                        <span>Podcasts</span>
                    </a>
                </div>
                <div className="morefromyoutube sectionofnav">
                    <span className="moreFromYoutube notbutton">More from YouTube</span>
                    <a href="" className="navlink">
                        <i className="material-icons sidebaricons">feed</i>
                        <span>YouTube Premium</span>
                    </a>
                    <a href="" className="navlink">
                        <i className="material-icons sidebaricons">emoji_events</i>
                        <span>YouTube Studio</span>
                    </a>
                    <a href="" className="navlink">
                        <i className="material-icons sidebaricons">emoji_objects</i>
                        <span>YouTube Music</span>
                    </a>
                    <a href="" className="navlink">
                        <i className="material-icons sidebaricons">podcasts</i>
                        <span>YouTube Kids</span>
                    </a>
                </div>
                <div className="settingsandall sectionofnav">
                <a href="" className="navlink">
                        <i className="material-icons sidebaricons">settings</i>
                        <span>Settings</span>
                    </a>
                    <a href="" className="navlink">
                        <i className="material-icons sidebaricons">flag</i>
                        <span>Report History</span>
                    </a>
                    <a href="" className="navlink">
                        <i className="material-icons sidebaricons">help</i>
                        <span>Help</span>
                    </a>
                    <a href="" className="navlink">
                        <i className="material-icons sidebaricons">chat</i>
                        <span>Send Feedback</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar