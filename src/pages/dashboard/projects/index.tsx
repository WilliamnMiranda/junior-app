import * as C from './style'
import LayoutDashboard from '../layout'
import Project from './project'
const Projects = () => {
  return (
    <LayoutDashboard>
      <C.ContainerProjects>
        <C.ContainerProjectOwner>
          <C.ContainerHeader>
            <C.Tittle> Meus Projetos</C.Tittle>
          </C.ContainerHeader>
          <C.ProjectsList>
            <Project />
          </C.ProjectsList>
        </C.ContainerProjectOwner>

        <C.ContainerProjectParticipant>
          <C.ContainerHeader>
            <C.Tittle> Projetos que participo</C.Tittle>
          </C.ContainerHeader>
        </C.ContainerProjectParticipant>
      </C.ContainerProjects>
    </LayoutDashboard>
  )
}

export default Projects
