import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Cadastro from './Cadastro/Cadastro'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
      <Route path="/cadastro" element={<Cadastro />}></Route>
      <Route path="/detalhe" element={<Detalhe />}></Route>
      <Route path="/" element={<Home />}></Route>
       
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
