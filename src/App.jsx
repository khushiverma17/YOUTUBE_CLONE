import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
import Sidebar from './Components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
      </Routes>
    </div>
  )
}
export default App