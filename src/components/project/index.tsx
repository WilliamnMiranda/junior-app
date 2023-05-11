import React from 'react'
import * as C from './style'
import languages from '../../utils/languages'
import Type from '../type'

interface IProject {
  project: {
    coreTechnology: String
    level: String
    name: String
    owner: String
    participants: String[]
    technologies: String[]
    likes: Number
    description: String
    views: Number
  }
}
function Project({ project }: IProject) {
  const language = languages[project.coreTechnology.toString()]
  console.log(language.color)
  return (
    <C.ContainerProject>
      <C.ContainerImageProject color={language.color}>
        <C.ImageProject src={language.icon} />
      </C.ContainerImageProject>
      <C.ContainerNameProject>{project.name}</C.ContainerNameProject>
      <C.ContainerLanguagesProject>
        <C.TextTechnologies>Tecnologias</C.TextTechnologies>
        <C.containerLanguages>
          {project.technologies.map(
            (item, index) =>
              index <= 7 && (
                <Type key={index} url={languages[project.technologies[index].toString()].icon} name={item} />
              )
          )}
        </C.containerLanguages>
      </C.ContainerLanguagesProject>
      <C.ContainerInfoProject>
        <C.ContainerTeamProject></C.ContainerTeamProject>
        <C.ContainerViewsProject></C.ContainerViewsProject>
      </C.ContainerInfoProject>

      <C.ButtonViewProject> VER PROJETOS </C.ButtonViewProject>
    </C.ContainerProject>
  )
}

export default Project
