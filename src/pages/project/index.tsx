import * as C from './style'
import projectServices from '../../services/projectService'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import Header from '../../components/header'
import languages from '../../utils/languages'
import Type from '../../components/type'
import Recomendations from './recomendations'

const ProjectScreen = () => {
  const { id } = useParams()
  const { data, isLoading } = useQuery({
    queryKey: ['languages'],
    queryFn: () => projectServices.getOne(id as string),
  })
  return (
    <C.ContainerScreenProject>
      <Header />
      <C.ContainerDivider>
        <C.ContainerProject>
          <C.TittleProject> {data?.name}</C.TittleProject>
          <C.ContainerButtons>
            <C.ButtonViewProfile>Ver perfil</C.ButtonViewProfile>
            <C.ButtonAplly>Se inscrever</C.ButtonAplly>
          </C.ContainerButtons>
          <C.AllInfos>
            <C.ContainerInfo>
              <C.TitleInfo>Nivel de experiencia: </C.TitleInfo>
              <C.ResponseInfo>{data?.level}</C.ResponseInfo>
            </C.ContainerInfo>
            <C.ContainerInfo>
              <C.TitleInfo>Tecnologia Principal: </C.TitleInfo>
              <C.ResponseInfo>{data?.coreTechnology}</C.ResponseInfo>
            </C.ContainerInfo>
            <C.ContainerInfo>
              <C.TitleInfo>Visualizacoes: </C.TitleInfo>
              <C.ResponseInfo>{data?.views}</C.ResponseInfo>
            </C.ContainerInfo>
            <C.ContainerInfo>
              <C.TitleInfo>Linguagems utilizadas </C.TitleInfo>
              <C.ResponseInfoTechs>
                {data?.technologies &&
                  data.technologies.map((tech: string) => {
                    const icon = tech && languages[tech]?.icon
                    return <Type url={icon} />
                  })}
              </C.ResponseInfoTechs>
            </C.ContainerInfo>
            <C.ContainerInfo>
              <C.TitleInfo>Criado dia: </C.TitleInfo>
              <C.ResponseInfo>{data?.createdAt}</C.ResponseInfo>
            </C.ContainerInfo>
            <C.ContainerInfo>
              <C.TitleInfo>Nivel de experiencia: </C.TitleInfo>
              <C.ResponseInfo>{data?.level}</C.ResponseInfo>
            </C.ContainerInfo>
          </C.AllInfos>

          <C.ContainerDescription>
            <C.TittleDescription> Descricao do projeto </C.TittleDescription>
            <C.Description>{data?.description}</C.Description>
          </C.ContainerDescription>
        </C.ContainerProject>
        <C.ContainerIndication>
          <C.TitleInfo>Projetos recomendados</C.TitleInfo>
          <Recomendations />
        </C.ContainerIndication>
      </C.ContainerDivider>
    </C.ContainerScreenProject>
  )
}

export default ProjectScreen
