import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Components/routes/roure.jsx'
import Contex from './Components/authProvider/Contex.jsx'






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contex>
      <RouterProvider router={router} />
    </Contex>
  </React.StrictMode>,
)
