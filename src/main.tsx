import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './routes.tsx'
import { RouterProvider } from 'react-router-dom'
import GlobalStyle from './components/globalStyle/index.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { store } from './store'
import { Provider } from 'react-redux'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
)
