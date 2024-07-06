import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import Dashboard from './Components/Dashboard'

function App() {
  return (
    <BrowserRouter>
    <Router>
      <Route path='/adminlogin' element={<Login />} ></Route>
      <Route path='/dashboard' element={<Dashboard />} ></Route>
    </Router>
    </BrowserRouter>
  )
}

export default App


