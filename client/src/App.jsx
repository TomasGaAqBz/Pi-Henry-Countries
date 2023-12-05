//? hooks
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

//? components
import Landing from './pages/Landing/Landing.jsx'
import Detail from './pages/Detail/Detail.jsx';
import FormActivity from './pages/FormActivity/FormActivity.jsx';
import Error from './pages/Error/Error.jsx'
import './App.css'
import Home from './pages/Home/Home.jsx';
import Navbar from './components/NavBar/Navbar.jsx';

function App() {
  const {pathname} = useLocation()

  return (
  <div className='appContainer'>
    {pathname !== "/" && <Navbar />}
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path='/home' element={<Home/>}  />
      <Route path='/detail/:id' element={<Detail/>}  />
      <Route path='/activity' element={<FormActivity/>}  />
      <Route path="/create" element={<FormActivity />} />
      <Route path='*' element={<Error/>} />
    </Routes>
  </div>
  )
}

export default App
