import React, { useState } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Home.css'
import Feed from '../../Components/Feed/Feed'
import { useSelector } from 'react-redux'

const Home=({sidebar})=>{
    
    // here category is a variable name and setCategory is the function to modify category variable
    const [category,setCategory]=useState(0);
    const lightTheme=useSelector(state=>state.themeKey);

    return (
        <>
            <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
            <div className={`container ${sidebar?"":'large-container'}`}>
                <Feed category={category}/>
            </div>
        </>
    )
}

export default Home