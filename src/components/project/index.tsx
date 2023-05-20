import * as C from './style'
import languages from '../../utils/languages'
import Type from '../type'
import { AiFillEye, AiFillHeart } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
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
    _id: String
  }
}
function Project({ project }: IProject) {
  const language = languages[project.coreTechnology.toString()]
  return (
    <C.ContainerProject>
      <NavLink to={`/project/${project._id}`}>
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
        <C.ContainerViewsAndParticipants>
          <C.ContainerInfos>
            <C.ContainerItemView>
              <AiFillHeart /> 20
            </C.ContainerItemView>
            <C.ContainerItemView>
              <AiFillEye /> 12
            </C.ContainerItemView>
          </C.ContainerInfos>

          <C.ContainerParticipants>
            <C.Participant></C.Participant>
            <C.Participant></C.Participant>
            <C.Participant></C.Participant>
            <C.Participant></C.Participant>
          </C.ContainerParticipants>
        </C.ContainerViewsAndParticipants>
        <C.ButtonViewProject> VER PROJETO </C.ButtonViewProject>
      </NavLink>
    </C.ContainerProject>
  )
}

export default Project
