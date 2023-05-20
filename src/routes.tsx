import { createBrowserRouter } from 'react-router-dom'

import HomePage from './pages/home'
import CreateProject from './pages/create_project'
import Login from './pages/login'
import PrivateRoute from './components/PrivateRoute'
import ProjectScreen from './pages/project'

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
  {
    path: '/project/:id',
    element: <PrivateRoute element={ProjectScreen} />,
  },
])

export default router
