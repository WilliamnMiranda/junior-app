import React from 'react'
import * as C from './style'
import languages from '../../../../utils/languages'
import Type from '../../../../components/type'
import { AiFillEye, AiOutlineCloseCircle } from 'react-icons/ai'
import { MdModeEdit } from 'react-icons/md'

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
      </C.ContainerInfo>
      <C.ContainerIcons>
        <C.ContainerItemView>
          <AiFillEye />
        </C.ContainerItemView>
        <C.ContainerItemView>
          <MdModeEdit />
        </C.ContainerItemView>
        <C.ContainerItemView>
          <AiOutlineCloseCircle />
        </C.ContainerItemView>
      </C.ContainerIcons>
    </C.ContainerProject>
  )
}

export default Project
