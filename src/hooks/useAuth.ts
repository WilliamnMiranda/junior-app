import { useQuery } from '@tanstack/react-query'
import userServices from '../services/userService'
import { useDispatch } from 'react-redux'
import { authenticate } from '../store/slices/userSlice'
export const useAuth = () => {
  const dispatch = useDispatch()
  const { data, isLoading } = useQuery({
    queryKey: ['collections'],
    queryFn: () => userServices.auth(),
  })

  if (!isLoading && data) dispatch(authenticate(data))

  return {
    data,
    isLoading,
  }
}
