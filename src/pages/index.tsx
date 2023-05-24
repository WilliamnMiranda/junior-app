import { useAuth } from '../hooks/useAuth.ts'
import router from '../routes.tsx'
import { RouterProvider } from 'react-router-dom'
const Auth = () => {
  const { isLoading } = useAuth()
  return isLoading ? <div> loading</div> : <RouterProvider router={router} />
}

export default Auth
