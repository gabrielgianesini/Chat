import React from 'react'
import { useLocation } from 'react-router';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginBox } from '../components/LoginBox';
import { NewLogin } from '../components/NewLogin'


export function Router () {

 return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewLogin />} />
        </Routes>
      </BrowserRouter>
    )
}
