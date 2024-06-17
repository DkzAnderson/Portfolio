import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'

import { Start } from './components/Start.jsx'
import { Portfolio } from './components/Portfolio.jsx'
import { Contact } from './components/Contact.jsx'
import { Proyects } from './components/Proyects.jsx'

const router = createHashRouter([
  {
    path: '/',
    element: <Start/>
  },
  {
    path: '/start',
    element: <Start/>
  },
  {
    path: '/portfolio',
    element: <Portfolio/>
  },
  {
    path: '/contact',
    element: <Contact/>
  },
  {
    path: '/proyect/:id',
    element: <Proyects/>
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>

  </React.StrictMode>,
)
