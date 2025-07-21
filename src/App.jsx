import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Navbar from './Components/header/Navbar'
import Footer from './Components/footer/Footer'
import UseState from './Hooks/UseState'
import UseEffect from './Hooks/UseEffect'
import FakeApi from './Hooks/FakeAPI'
import ChildA from './props/ChildA'
import ChildB from './props/ChildB'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/usestate' element={<UseState />}></Route>
        <Route path='/useeffect' element={<UseEffect />}></Route>
        <Route path='/fakeapi' element={<FakeApi/>}></Route>
        <Route path='/child-a' element={<ChildA />}></Route>
        <Route path='/child-b' element={<ChildB />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App











