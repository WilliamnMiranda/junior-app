import { useEffect, useState } from 'react'
import userServices from '../services/userService'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../store/slices/userSlice'
import { UserDataLogin } from '../interfaces/user'
export const useLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['auth'],
    queryFn: () => userServices.auth(),
    retry: false,
  })

  const mutation = useMutation((data: UserDataLogin) => userServices.login(data), {
    onSuccess: (data) => {
      dispatch(login(data))
      navigate('/')
    },
  })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const data = { email, password }
    mutation.mutate(data)
  }

  useEffect(() => {
    if (data) {
      navigate('/')
    }
  }, [isLoading])
  return {
    setEmail,
    setPassword,
    submit,
    data,
    isLoading,
    isSuccess,
  }
}
