import { ReactElement } from 'react'
import * as C from './style'
import {
  AiFillAppstore,
  AiOutlineFund,
  AiOutlineUser,
  AiOutlineSolution,
  AiOutlineFire,
  AiOutlineBell,
} from 'react-icons/ai'
interface IProps {
  children: ReactElement
}
const LayoutDashboard = ({ children }: IProps) => {
  return (
    <C.Layout>
      <C.Aside>
        <C.ItemAside>
          <AiFillAppstore /> DASHBOARD
        </C.ItemAside>
        <C.ItemAside>
          <AiOutlineFund /> Projetos
        </C.ItemAside>
        <C.ItemAside>
          <AiOutlineSolution /> Inscricoes
        </C.ItemAside>
        <C.ItemAside>
          <AiOutlineUser /> Perfil
        </C.ItemAside>
        <C.ItemAside>
          <AiOutlineBell /> Notificacoes
        </C.ItemAside>
      </C.Aside>
      {<C.ContainerElement>{children}</C.ContainerElement>}
    </C.Layout>
  )
}

export default LayoutDashboard
