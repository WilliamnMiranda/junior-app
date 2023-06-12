import { useQuery } from '@tanstack/react-query'
import userServices from '../services/userService'
import { useDispatch } from 'react-redux'
import { authenticate } from '../store/slices/userSlice'
import { useEffect } from 'react'
export const useAuth = () => {
  const dispatch = useDispatch()

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['auth'],
    queryFn: () => userServices.auth(),
    retry: false,
  })

  useEffect(() => {
    if (!isLoading && data) {
      dispatch(authenticate(data))
    }
  }, [])

  return {
    data,
    isLoading,
    isSuccess,
  }
}
