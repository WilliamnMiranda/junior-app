import Header from '../../components/header'
import * as C from './style'
const Login = () => {
  return (
    <C.ContainerScreenLogin>
      <Header />
      <C.ContainerLogin>
        <C.Content>
          <C.ContainerOneInput>
            <C.ContainerInfo>
              <C.Label>Email</C.Label>
              <C.Input placeholder="appjunior@gmail.com" />
            </C.ContainerInfo>
          </C.ContainerOneInput>

          <C.ContainerOneInput>
            <C.ContainerInfo>
              <C.Label>Password</C.Label>
              <C.Input placeholder="Entre com sua senha" />
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
