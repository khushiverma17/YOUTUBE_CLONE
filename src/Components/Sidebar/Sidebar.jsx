import React from "react";
import './Sidebar.css'
import { useSelector } from "react-redux";


// ({sidebar, category, setCategory}): This is the destructuring of props in the parameter list of the function. It means that the function expects an object with properties sidebar, category, and setCategory.
// In React, "props" (short for properties) are a fundamental concept used for passing data from one component to another. Props are immutable and are passed from parent components down to their children. They allow you to customize and configure React components dynamically.
    const Sidebar = ({sidebar,category,setCategory}) => {
        const lightTheme=useSelector(state=>state.themeKey);
        return (
        <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons&display=swap" />
            <div className={"nav" + ((lightTheme)?"" : " dark")}>
                    
                    <a  className={`side-link ${category === 0 ? "active" : ""} ${(lightTheme ? "" : " dark")}`}  onClick={(e) => { e.preventDefault(); setCategory(0); }}>
                        <i className="material-icons sidebaricons">home</i>
                        <span>Home</span>
                    </a>
                    <a href="" className={`side-link ${category === 10 ? "active" : ""} ${(lightTheme ? "" : " dark")}`} onClick={(e) => { e.preventDefault(); setCategory(10); }}>
                        <i className="material-icons sidebaricons">music_note</i>
                        <span>Music</span>
                    </a>
                    <a href="" className={`side-link ${category === 23 ? "active" : ""} ${(lightTheme ? "" : " dark")}`} onClick={(e) => { e.preventDefault(); setCategory(23); }}>
                        <i className="material-icons sidebaricons">theaters</i>
                        <span>Comedy</span>
                    </a>
                   
                    <a href="" className={`side-link ${category === 20 ? "active" : ""} ${(lightTheme ? "" : " dark")}`} onClick={(e) => { e.preventDefault(); setCategory(20); }}>
                        <i className="material-icons sidebaricons">sports_esports</i>
                        <span>Gaming</span>
                    </a>
                    <a href="" className={`side-link ${category === 25 ? "active" : ""} ${(lightTheme ? "" : " dark")}`} onClick={(e) => { e.preventDefault(); setCategory(25); }}>
                        <i className="material-icons sidebaricons">feed</i>
                        <span>News</span>
                    </a>
                    <a href="" className={`side-link ${category === 17 ? "active" : ""} ${(lightTheme ? "" : " dark")}`} onClick={(e) => { e.preventDefault(); setCategory(17); }}>
                        <i className="material-icons sidebaricons">emoji_events</i>
                        <span>Sports</span>
                    </a>
                    <a href="" className={`side-link ${category === 28 ? "active" : ""} ${(lightTheme ? "" : " dark")}`} onClick={(e) => { e.preventDefault(); setCategory(28); }}>
                        <i className="material-icons sidebaricons">emoji_objects</i>
                        <span>Science</span>
                    </a>
                   
                
                
            </div>
        </div>
    )
}

export default Sidebar

