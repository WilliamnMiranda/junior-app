import { useEffect, useState } from 'react'
import Header from '../../components/header'
import * as C from './style'
import { useMutation, useQuery } from '@tanstack/react-query'
import userServices from '../../services/userService'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../store/slices/userSlice'
import { Navigate, useNavigate } from 'react-router-dom'
import { RootState } from '../../store'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['auth'],
    queryFn: () => userServices.auth(),
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user: any = useSelector<RootState>((state) => state.user)
  const mutation = useMutation((data: any) => userServices.login(data), {
    onSuccess: (data) => {
      dispatch(login(data))
      navigate('/')
    },
  })

  useEffect(() => {
    if (data) {
      navigate('/')
    }
  }, [isLoading])
  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const data = { email, password }
    mutation.mutate(data)
  }
  return isLoading ? (
    <div>carregando</div>
  ) : isSuccess ? (
    <Navigate to="/" />
  ) : (
    <C.ContainerScreenLogin>
      <Header />
      <C.ContainerLogin onSubmit={submit}>
        <C.Content>
          <C.ContainerOneInput>
            <C.ContainerInfo>
              <C.Label>Email</C.Label>
              <C.Input placeholder="appjunior@gmail.com" onChange={(e) => setEmail(e.target.value)} type="email" />
            </C.ContainerInfo>
          </C.ContainerOneInput>

          <C.ContainerOneInput>
            <C.ContainerInfo>
              <C.Label>Password</C.Label>
              <C.Input
                placeholder="Entre com sua senha"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </C.ContainerInfo>
          </C.ContainerOneInput>
          <C.ButtonSubmit> Login </C.ButtonSubmit>
          <C.RecoverPassword> Esqueceu sua senha ?</C.RecoverPassword>
        </C.Content>
        <C.CreateAccount> CRIAR UMA CONTA</C.CreateAccount>
      </C.ContainerLogin>
    </C.ContainerScreenLogin>
  )
}

export default Login
