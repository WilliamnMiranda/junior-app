import styled from 'styled-components'
export const ContainerProjects = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 10px;
  min-height: calc(100vh - 45px);
`
export const ContainerHeader = styled.div`
  width: 100%;
  word-break: break-all;
`
export const ContainerProjectOwner = styled.div`
  width: 50%;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  min-height: calc(100vh - 45px);
`

export const ContainerProjectParticipant = styled.div`
  width: 50%;
  min-height: calc(100vh - 45px);
`

export const Tittle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 1.5em;
  text-transform: uppercase;
  padding: 15px 10px;
  color: rgb(86, 86, 86);
`
export const ProjectsList = styled.div`
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
`

export const Project = styled.div``
export const ContainerNoData = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  min-height: calc(100vh - 105px);
  height: 100%;
  p {
    font-size: 2em;
    font-family: 'Poppins', sans-serif;
    position: relative;
    left: 30px;
  }
  img {
    width: 200px;
  }
`
