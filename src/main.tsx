import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './components/globalStyle/index.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { store } from './store'
import { Provider } from 'react-redux'
import Auth from './pages'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <GlobalStyle />
        <Auth />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
)
