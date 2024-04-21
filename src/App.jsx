import { useState } from 'react'
import { BrowserRouter,Routes,Route, useNavigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Pokemones from './pages/Pokemones.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import LogoPng from "./assets/logo.png"
import "bootstrap-icons/font/bootstrap-icons.css"

function App() {

  return (
   <>
    
    <BrowserRouter>
    
    <Routes>
      
    <Route  path="/" element={<Home></Home>}></Route>
    <Route path="/:pokemon" element={<Pokemones></Pokemones>}></Route>
    </Routes>
</BrowserRouter></>
  )
}

export default App
