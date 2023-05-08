import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './routes.tsx'
import { RouterProvider } from 'react-router-dom'
import GlobalStyle from './components/globalStyle/index.tsx'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>,
)