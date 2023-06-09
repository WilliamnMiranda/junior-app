import { useQuery } from '@tanstack/react-query'
import Header from '../../components/header'
import Project from '../../components/project'
import popularLanguages from '../../utils/popularLanguages'
import * as C from './style'
import projectServices from '../../services/projectService'
import { IProject } from '../../interfaces/project'

const HomePage = () => {
  const { data } = useQuery({
    queryKey: ['projects_recents'],
    queryFn: () => projectServices.recents(),
  })
  return (
    <C.ContainerHomePage>
      <Header />
      <C.SearchByType>
        <C.Content>
          <C.TittleSearch> Encontre projetos que desafiam e desenvolvem suas habilidades </C.TittleSearch>
          <C.SubTittleSearch> Networking é sobre construir relacionamentos - comece agora </C.SubTittleSearch>
          <C.ContainerInputSearch>
            <C.InputSearch />
            <C.ButtonSearchByType> ENCONTRAR </C.ButtonSearchByType>
          </C.ContainerInputSearch>
        </C.Content>
      </C.SearchByType>

      <C.PopularTypes>
        <C.TittlePopularLanguages>Linguagems populares </C.TittlePopularLanguages>
        <C.ContainerIconsLanguages>
          {popularLanguages?.map((item) => {
            return (
              <>
                <C.ContainerIcon>
                  <C.IconLanguage key={item.name} src={item.icon} alt={item.name} />
                </C.ContainerIcon>
              </>
            )
          })}
        </C.ContainerIconsLanguages>
      </C.PopularTypes>

      <C.ContainerRecentsProject>
        <C.TittlePopularLanguages> Projetos Recentes </C.TittlePopularLanguages>
        <C.ContainerProjects>
          {data?.map((project: IProject) => {
            return <Project project={project} />
          })}
        </C.ContainerProjects>
      </C.ContainerRecentsProject>
    </C.ContainerHomePage>
  )
}

export default HomePage
