import styled from 'styled-components'

export const ContainerProject = styled.article`
  display: flex;
  height: 140px;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  gap: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`
export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImageProject = styled.img`
  width: 70px;
  height: 70px;
`
export const ContainerInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`
export const TittleProject = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 1.1em;
  overflow: hidden;
  -webkit-line-clamp: 2;
  text-align: justify;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  text-transform: uppercase;
  color: rgb(86, 86, 86);
`
export const ContainerTechs = styled.div``

export const TextTechnologies = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 0.8em;
  text-transform: uppercase;
  color: #6a6f73;
`

export const ContainerLanguages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  align-items: center;
`
export const ContainerViewsAndParticipants = styled.section`
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
