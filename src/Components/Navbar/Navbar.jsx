import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode'
import { Icon, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {toggleTheme} from "../../Features/themeSlice"


const Navbar=({setSidebar})=>{

    const dispatch=useDispatch();
    // to make this lightTheme variable globally available, use redux toolkit it is a global state management library which allows to provide a particular state to every other components in the application
    // const [lightTheme,setLightTheme]=useState("true");

    const lightTheme=useSelector(state=>state.themeKey);

    return(
        <div id="body">
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons&display=swap" />
        <nav className={"navbar" + ((lightTheme)?"" : " dark")}>
        <div className={"left" + ((lightTheme)?"" : " dark")}>
            {/* here prev is the argument */}
            <button id="menubtn" onClick={()=>setSidebar(prev=>prev===false?true:false)} className={(lightTheme)?"" : " dark"}>
                 <i id="menu" className="material-icons">menu</i>
            </button>
            <Link to="/">
                <img src="https://cdn-icons-png.flaticon.com/128/174/174883.png" alt="logo" id="youtubeimg"/>
            </Link>
        </div>

        <div className={"center" + ((lightTheme)?"" : " dark")}>
            <form action="">
                <input type="text" placeholder="Search" className={(lightTheme)?"" : " dark"}/>
                <button id="searchbtn" className={(lightTheme)?"" : " darkvoice"}><i className="material-icons">search</i></button>
            </form>
            <button id="micbtn" className={(lightTheme)?"" : "darkvoice"}><i className="material-icons" style={{fontSize: '24px'}}>mic</i></button>

        </div>

        <div className="right">
            <i className="material-icons">videocam</i>
            <i className="material-icons">notifications</i>
            <IconButton onClick={()=>{dispatch(toggleTheme())}} style={{marginTop:"-16px"}}>
                {lightTheme && <NightlightIcon className={"icon" + ((lightTheme)?"" : " dark")} style={{color:"black"}}/>}
                {!lightTheme && <LightModeIcon className={"icon" + ((lightTheme)?"" : " dark")}/>}
            </IconButton>

            <i className="material-icons display-this">account_circle</i>



        </div>

        </nav>
        </div>
    )
}
export default Navbar