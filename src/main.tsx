import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import router from './routes.tsx'
import { RouterProvider } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)