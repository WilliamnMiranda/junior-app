import { createBrowserRouter } from 'react-router-dom'

import HomePage from './pages/home'
import CreateProject from './pages/create_project'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/create/project',
    element: <CreateProject />,
  },
])

export default router
