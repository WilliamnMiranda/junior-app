import { ReactElement } from 'react'
import * as C from './style'
import { AiFillAppstore, AiOutlineFund, AiOutlineUser, AiOutlineSolution, AiOutlineBell } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
interface IProps {
  children: ReactElement
}
const LayoutDashboard = ({ children }: IProps) => {
  return (
    <C.Layout>
      <C.Aside>
        <NavLink to="/dashboard">
          <C.ItemAside>
            <AiFillAppstore /> DASHBOARD
          </C.ItemAside>
        </NavLink>
        <NavLink to="/dashboard/projects">
          <C.ItemAside>
            <AiOutlineFund /> Projetos
          </C.ItemAside>
        </NavLink>
        <NavLink to="/dashboard/subscriptions">
          <C.ItemAside>
            <AiOutlineSolution /> Inscricoes
          </C.ItemAside>
        </NavLink>
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
