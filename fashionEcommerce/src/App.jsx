import HomePage from './Pages/Home'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Signin from './Pages/Signin'

function App() {
  

  return (
   <>
   <Routes>
    <Route path = "/" element = {<HomePage/>} ></Route>
    <Route path = "/login" element = {<Signin />}></Route>
   </Routes>
   </>
  )
}

export default App
