import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './component/Login'
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home"
import Contact from './Pages/Contact'
import Profile from './Pages/Profile'
import Success from './Pages/Success'
import Banner from './Pages/Banner'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
      {/* <Route path="/success" elements={<Home />} /> */}
      {/* <Route path="/banner" elements={<Profile />} /> */}
      <Route path="/banner" element={<Banner />} />
      <Route path="/success" element={<Success />} />



      
      {/* Add more routes here */}
    </Routes>
    </BrowserRouter>
)
}

export default App
