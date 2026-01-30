import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Main from './pages/Main'
import Love from './pages/Love'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/main" element={<Main />} />
      <Route path="/love" element={<Love />} />
      <Route path="/you" element={<Main />} />
      <Route path="/so1" element={<Main />} />
      <Route path="/so2" element={<Main />} />
      <Route path="/much" element={<Main />} />
    </Routes>
  )
}

export default App
