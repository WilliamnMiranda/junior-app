import styled from 'styled-components'

export const ContainerRecomendations = styled.section`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`

export const Project = styled.div`
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 7px;
  width: 100%;
  height: 130px;
  display: flex;
  padding: 10px;
  background-color: white;
`
export const ContainerImageProject = styled.div`
  display: flex;
  width: 25%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

export const ImageProject = styled.img`
  width: 60%;
`
export const ContainerInfosProject = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 75%;
`
export const ContainerLevel = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  p {
    position: relative;
    top: -8%;
  }
`

export const ContainerTittle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 1em;
  text-transform: uppercase;
`
export const ResponseInfoTechs = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9em;
  display: flex;
  gap: 10px;
  flex-direction: column;
`
export const TitleInfo = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 0.8em;
  text-transform: uppercase;
`
export const ContainerIcons = styled.div`
  display: flex;
  gap: 10px;
  overflow: hidden;
  padding: 5px;
`
export const ResponseInfo = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9em;
`
