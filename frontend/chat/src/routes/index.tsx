import React from 'react'
import { useLocation } from 'react-router';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '../page/Login'


export function Router () {

 return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    )
}
