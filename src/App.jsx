import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './Components/Molecule/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Header" element={<Header/>}></Route>
    </Routes>
    </BrowserRouter>

    
  )
  

}


export default App
