import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
import Sidebar from './Components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

const App = () => {
  const lightTheme=useSelector(state=>state.themeKey);
  // creating a state variable This line of code initializes a state variable named sidebar and a function setSidebar to update the value of sidebar. The initial value of sidebar is set to true. This code is commonly used in React to manage state within functional components.
  //initial value is provided to be true
  const [sidebar,setSidebar]=useState(true);
  return (
    <div className={"App" + ((lightTheme)?"" : " dark")}>
       {/* rendering a Navbar component passing setSidebar as a prop. */}
       {/* setSidebar={setSidebar} means creating a prop =>they are like attributes */}
       {/* props are used to send data from parent to child */}
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        {/* send sidebar to home */}
        {/* when user come to / path i want to render home component */}
        {/* The Route component is used to define a mapping between a URL path and a React component. It renders the component when the URL matches the specified path. */}
        <Route path='/' element={<Home sidebar={sidebar} />} />
        {/* when user come to /video/:categoryId/:videoId path i want to render video component */}
        {/* here : denotes that categoryId is variable and whatever is written /video/... will come to this variabla */}
        <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
      </Routes>
    </div>
  )
}
export default App