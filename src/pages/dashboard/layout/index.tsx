import { ReactElement } from 'react'
import * as C from './style'

interface IProps {
  children: ReactElement
}
const LayoutDashboard = ({ children }: IProps) => {
  return (
    <C.Layout>
      <C.Aside>
        <div> DASHBOARD </div>
        <div> LAYOUT </div>
      </C.Aside>
      {<C.ContainerElement>{children}</C.ContainerElement>}
    </C.Layout>
  )
}

export default LayoutDashboard
