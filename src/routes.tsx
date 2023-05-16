import { createBrowserRouter } from 'react-router-dom'

import HomePage from './pages/home'
import CreateProject from './pages/create_project'
import Login from './pages/login'
import PrivateRoute from './components/PrivateRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/create/project',
    element: <PrivateRoute element={CreateProject} />,
  },
  {
    path: '/login',
    element: <Login />,
  },
])

export default router
