import { useQuery } from '@tanstack/react-query'
import { useAuth } from '../hooks/useAuth.ts'
import router from '../routes.tsx'
import { RouterProvider } from 'react-router-dom'
import userServices from '../services/userService.ts'
import { authenticate } from '../store/slices/userSlice.ts'
import { useDispatch } from 'react-redux'

const Auth = () => {
  const dispatch = useDispatch()
  const { data } = useQuery({
    queryKey: ['auth'],
    queryFn: () => userServices.auth(),
    retry: false,
    onSuccess: (data) => dispatch(authenticate(data)),
  })

  return <RouterProvider router={router} />
}

export default Auth
