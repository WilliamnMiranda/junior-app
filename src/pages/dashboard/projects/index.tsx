import * as C from './style'
import LayoutDashboard from '../layout'
import Project from './project'
import { useQuery } from '@tanstack/react-query'
import projectServices from '../../../services/projectService'
import nodata from '../../../images/nodata.svg'
import { IProject } from '../../../interfaces/project'
const Projects = () => {
  const { data } = useQuery({
    queryKey: ['my_projects'],
    queryFn: () => projectServices.getAll(),
    retry: false,
  })
  return (
    <LayoutDashboard>
      <C.ContainerProjects>
        <C.ContainerProjectOwner>
          <C.ContainerHeader>
            <C.Tittle> Meus Projetos</C.Tittle>
          </C.ContainerHeader>
          <C.ProjectsList>
            {data?.length > 0 ? (
              data?.map((project: IProject) => <Project project={project} />)
            ) : (
              <C.ContainerNoData>
                <img src={nodata} />
                <p>Voce nao tem projetos</p>
              </C.ContainerNoData>
            )}
          </C.ProjectsList>
        </C.ContainerProjectOwner>

        <C.ContainerProjectParticipant>
          <C.ContainerHeader>
            <C.Tittle> Projetos que participo</C.Tittle>
          </C.ContainerHeader>
          <C.ProjectsList>
            {data?.length > 0 ? (
              <C.ContainerNoData>
                <img src={nodata} />
                <p>Voce nao participa de projetos</p>
              </C.ContainerNoData>
            ) : (
              data?.map((project: IProject) => <Project project={project} />)
            )}
          </C.ProjectsList>
        </C.ContainerProjectParticipant>
      </C.ContainerProjects>
    </LayoutDashboard>
  )
}

export default Projects
