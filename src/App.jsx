import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
import Sidebar from './Components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

const App = () => {
  const lightTheme=useSelector(state=>state.themeKey);
  const [sidebar,setSidebar]=useState(true);
  return (
    <div className={"App" + ((lightTheme)?"" : " dark")}>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} />} />
        <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
      </Routes>
    </div>
  )
}
export default App