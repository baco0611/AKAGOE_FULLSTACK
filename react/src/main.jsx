import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import StateContext from './context/ContextProvider'
import './style.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateContext>
      <RouterProvider router={router}/>
    </StateContext>
  </React.StrictMode>,
)
