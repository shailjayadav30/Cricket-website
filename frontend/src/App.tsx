import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./Pages/Home"
import Tournaments from "./Pages/Tournaments"
import Navbar from "./components/Navbar";
import About from './Pages/About';


function App() {

  return (
    <BrowserRouter>
      <Navbar />

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/tornaments" element={<Tournaments/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
