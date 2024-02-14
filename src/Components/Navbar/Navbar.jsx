import React from "react";
import './Navbar.css'


const Navbar=()=>{
    return(
        <div id="body">
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons&display=swap" />
        <nav className="navbar">
        <div className="left">
            <button  id="menubtn">
                 <i id="menu" className="material-icons">menu</i>
            </button>
            <img src="https://www.freecodecamp.org/news/content/images/2022/01/yt-logo.png" alt="logo" id="youtubeimg"/>
        </div>

        <div className="center">
            <form action="">
                <input type="text" placeholder="Search"/>
                <button id="searchbtn"><i className="material-icons">search</i></button>
            </form>
            <button id="micbtn"><i className="material-icons" style={{fontSize: '24px'}}>mic</i></button>

        </div>

        <div className="right">
            <i className="material-icons">videocam</i>
            <i className="material-icons">notifications</i>
            <i className="material-icons display-this">account_circle</i>

        </div>

        </nav>
        </div>
    )
}
export default Navbar