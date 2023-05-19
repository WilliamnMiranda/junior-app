import { useAuth } from '../hooks/useAuth.ts'
import router from '../routes.tsx'
import { RouterProvider } from 'react-router-dom'
const Auth = () => {
  const {} = useAuth()
  return <RouterProvider router={router} />
}

export default Auth
