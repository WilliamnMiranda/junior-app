import Header from '../../components/header'
import * as C from './style'
import { Navigate, useNavigate } from 'react-router-dom'
import { useLogin } from '../../hooks/useLogin'
const Login = () => {
  const { setEmail, setPassword, submit, isSuccess, isLoading } = useLogin()

  return isSuccess ? (
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
