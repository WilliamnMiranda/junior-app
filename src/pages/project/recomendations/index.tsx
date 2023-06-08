import * as C from './style'
import { useQuery } from '@tanstack/react-query'
import projectServices from '../../../services/projectService'
import languages from '../../../utils/languages'
import Type from '../../../components/type'

function Recomendations() {
  const { data } = useQuery({
    queryKey: ['projects_recents'],
    queryFn: () => projectServices.recents(),
  })
  return (
    <C.ContainerRecomendations>
      {data.map((project: any, index: number) => {
        if (index < 3) {
          return (
            <C.Project>
              <C.ContainerImageProject>
                <C.ImageProject src={languages[project.coreTechnology.toString()].icon} />
              </C.ContainerImageProject>
              <C.ContainerInfosProject>
                <C.ContainerTittle>{project?.name}</C.ContainerTittle>
                <C.ResponseInfoTechs>
                  <C.TitleInfo>Linguagems utilizadas</C.TitleInfo>
                  <C.ContainerIcons>
                    {project?.technologies.map((tech: string) => {
                      const icon = languages[tech?.toString()].icon
                      return <Type key={tech} url={icon} />
                    })}
                  </C.ContainerIcons>
                </C.ResponseInfoTechs>
                <C.ContainerLevel>
                  <C.TitleInfo>Nivel de experiencia: </C.TitleInfo>
                  <C.ResponseInfo>{project?.level}</C.ResponseInfo>
                </C.ContainerLevel>
              </C.ContainerInfosProject>
            </C.Project>
          )
        }
      })}
    </C.ContainerRecomendations>
  )
}

export default Recomendations
