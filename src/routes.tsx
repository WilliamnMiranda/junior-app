import { createBrowserRouter } from 'react-router-dom'

import HomePage from './pages/home'
import CreateProject from './pages/create_project'
import Login from './pages/login'
import PrivateRoute from './components/PrivateRoute'
import ProjectScreen from './pages/project'
import SearchProject from './pages/search_project'
import Dashboard from './pages/dashboard'
import Projects from './pages/dashboard/projects'

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
  {
    path: '/search',
    element: <SearchProject />,
  },
  {
    path: '/dashboard',
    element: <PrivateRoute element={Dashboard} />,
  },
  {
    path: '/dashboard/projects',
    element: <PrivateRoute element={Projects} />,
  },
])

export default router
