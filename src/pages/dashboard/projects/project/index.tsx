import React from 'react'
import * as C from './style'
import languages from '../../../../utils/languages'
import Type from '../../../../components/type'
import { AiFillEye, AiFillHeart } from 'react-icons/ai'

interface IProps {
  project: any
}
function Project({ project }: IProps) {
  console.log(project)
  const language = languages[project.coreTechnology?.toString()]
  console.log(language)
  return (
    <C.ContainerProject>
      <C.ContainerLogo>
        <C.ImageProject src={language?.icon} />
      </C.ContainerLogo>
      <C.ContainerInfo>
        <C.TittleProject>{project.name}</C.TittleProject>
        <C.ContainerTechs>
          <C.TextTechnologies>Tecnologias</C.TextTechnologies>
          <C.ContainerLanguages>
            {project.technologies?.slice(0, 8).map((technology: any, index: number) => (
              <Type key={index} url={languages[technology.toString()]?.icon} name={technology} />
            ))}
          </C.ContainerLanguages>
        </C.ContainerTechs>
        <C.ContainerViewsAndParticipants>
          <C.ContainerInfos>
            <C.ContainerItemView>
              <AiFillHeart /> 20
            </C.ContainerItemView>
            <C.ContainerItemView>
              <AiFillEye /> 12
            </C.ContainerItemView>
          </C.ContainerInfos>
        </C.ContainerViewsAndParticipants>
      </C.ContainerInfo>
    </C.ContainerProject>
  )
}

export default Project
