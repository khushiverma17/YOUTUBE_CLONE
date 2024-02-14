import React from "react";
import './Sidebar.css'

const Sidebar=()=>{
    return(
        <div className="sidebar">
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons&display=swap" />
            <div className="nav">
                <div className="topofyouinnav sectionofnav">
                    <a href="" className="navlink">
                        <i className="material-icons sidebaricons">home</i>
                        <span>Home</span>
                    </a>
                    <a href="" className="navlink">
                        <i className="material-icons sidebaricons">slow_motion_video</i>
                        <span>Shorts</span>
                    </a>
                    <a href="" className="navlink">
                        <i className="material-icons sidebaricons">subscriptions</i>
                        <span>Subscriptions</span>
                    </a>
                </div>
                <div className="youinnav sectionofnav">
                    <a href="" className="navlink">
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
                    <a href="" className="navlink">
                        <i className="material-icons sidebaricons">download</i>
                        <span>Downloads</span>
                    </a>
                    <a href="" className="navlink">
                        <i className="material-icons sidebaricons">thumb_up</i>
                        <span>Liked Videos</span>
                    </a>
                    </div>

            </div>
        </div>
    )
}

export default Sidebar