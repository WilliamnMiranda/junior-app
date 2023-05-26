import * as C from './style'
import LayoutDashboard from '../layout'
import Project from './project'
import { useQuery } from '@tanstack/react-query'
import projectServices from '../../../services/projectService'
const Projects = () => {
  const { data } = useQuery({
    queryKey: ['my_projects'],
    queryFn: () => projectServices.getAll(),
    retry: false,
  })
  console.log(data)
  return (
    <LayoutDashboard>
      <C.ContainerProjects>
        <C.ContainerProjectOwner>
          <C.ContainerHeader>
            <C.Tittle> Meus Projetos</C.Tittle>
          </C.ContainerHeader>
          <C.ProjectsList>
            {data?.map((project: any) => (
              <Project project={project} />
            ))}
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
