import React from "react";
import './Sidebar.css'

const Sidebar=()=>{
    return(
        <div className="sidebar">
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons&display=swap" />
            <div className="nav">
                <a href="" className="navlink">
                    <i className="material-icons sidebaricons">home</i>
                    <span>Home</span>
                </a>
                <a href="" className="navlink">
                    <i className="material-icons sidebaricons">home</i>
                    <span>Shorts</span>
                </a>
                <a href="" className="navlink">
                    <i className="material-icons sidebaricons">subscriptions</i>
                    <span>Subscriptions</span>
                </a>
            </div>
        </div>
    )
}

export default Sidebar