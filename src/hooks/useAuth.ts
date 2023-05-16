import { useQuery } from '@tanstack/react-query'
import userServices from '../services/userService'

export const useAuth = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['collections'],
    queryFn: () => userServices.auth(),
  })

  if (!isLoading && data) console.log('entrei')

  return {
    data,
    isLoading,
  }
}
