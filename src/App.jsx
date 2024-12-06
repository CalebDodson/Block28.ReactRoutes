import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Blue from './Components/Blue'
import Red from './Components/Red'
import Orange from './Components/Orange'
import Yellow from './Components/Yellow'
import Green from './Components/Green'
import Purple from './Components/Purple'
import Home from './Components/Home'

function App() {

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/red">Red</Link>
          <Link to="/orange">Orange</Link>
          <Link to="/yellow">Yellow</Link>
          <Link to="/home">Home</Link>        
          <Link to="/green">Green</Link>        
          <Link to="/blue">Blue</Link>
          <Link to="/purple">Purple</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/red" element={<Red />} />
            <Route path="/orange" element={<Orange />} />
            <Route path="/yellow" element={<Yellow />} />
            <Route path="/home" element={<Home />}/>
            <Route path="/green" element={<Green />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/purple" element={<Purple />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
