import styled from 'styled-components'

interface IContainerImageProject {
  color: string
}
export const ContainerProject = styled.article`
  width: 24%;
  height: 350px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  @media (max-width: 1850px) {
    width: 32.6%;
  }
  @media (max-width: 1565px) {
    width: 32.4%;
  }
  @media (max-width: 1169px) {
    width: 49%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
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
  padding: 5px 10px;
  height: 11%;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  text-align: justify;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  color: rgba(0, 0, 0, 0.9);
`

export const ContainerViewsProject = styled.span``
export const ContainerLanguagesProject = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  padding: 0px 10px;
  height: 20%;
  overflow: hidden;
`
export const TextTechnologies = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 0.8em;
  text-transform: uppercase;
  color: #6a6f73;
`
export const containerLanguages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  align-items: center;
`
export const ContainerViewsAndParticipants = styled.section`
  height: 8%;
  padding: 0px 10px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 0.9em;
  display: flex;
  justify-content: space-between;
  svg {
    width: 20px;
    height: 20px;
  }
`
export const ButtonViewProject = styled.button`
  height: 11%;
  color: white;
  font-weight: 400;
  background-color: rgb(13, 149, 225);
  font-family: 'Roboto', sans-serif;
  width: 100%;
  border: none;
  cursor: pointer;
`
export const ContainerItemView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`
export const ContainerInfos = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`
export const ContainerParticipants = styled.div`
  display: flex;
  gap: 2px;
`
export const ContainerTechs = styled.div``
export const Participant = styled.span`
  width: 20px;
  height: 20px;
  background-color: grey;
  border-radius: 50%;
`
