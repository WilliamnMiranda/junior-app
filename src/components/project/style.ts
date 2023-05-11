import styled from 'styled-components'

interface IContainerImageProject {
  color: string
}
export const ContainerProject = styled.article`
  width: 24.4%;
  height: 350px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`
export const ContainerImageProject = styled.article<IContainerImageProject>`
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color};
`

export const ImageProject = styled.img`
  width: 100px;
  height: 100px;
`

export const ContainerInfoProject = styled.div``
export const ContainerTeamProject = styled.div``

export const ContainerNameProject = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 0.9em;
  padding: 0px 10px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  text-align: justify;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  color: rgba(0, 0, 0, 0.9);
  background-color: red;
`

export const ContainerViewsProject = styled.span``
export const ContainerLanguagesProject = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0px 10px;
  height: 18%;
  overflow: hidden;
  background-color: pink;
`
export const TextTechnologies = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 0.8em;
  text-transform: uppercase;
`
export const containerLanguages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  align-items: center;
`
export const ButtonViewProject = styled.div`
  height: 7%;
  background-color: red;
`
