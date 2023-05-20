import styled from 'styled-components'
export const ContainerScreenProject = styled.div`
  height: 100vh;
  background-color: #f7f9fa;
  overflow: hidden;
`
export const ContainerDivider = styled.section`
  padding: 0 320px;
  display: flex;
  gap: 20px;
  margin-top: 20px;
  height: calc(100vh - 120px);
`
export const ContainerIndication = styled.section`
  width: 40%;
`
export const ContainerProject = styled.section`
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.12);
  width: 60%;
  height: calc(100vh - 120px);
  padding: 20px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 10px;
`

export const TittleProject = styled.h1`
  font-size: 1.4em;
  width: 100%;
  display: flex;
  background-color: #f4f5f7;
  justify-content: center;
  align-items: center;
  padding: 30px;
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
`

export const AllInfos = styled.section`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const ContainerInfo = styled.article`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const TitleInfo = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 1em;
  text-transform: uppercase;
`

export const ResponseInfo = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9em;
`

export const ResponseInfoTechs = styled(ResponseInfo)`
  display: flex;
  gap: 10px;
  align-items: center;
`
export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`
export const TittleDescription = styled.h3`
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
`
export const Description = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.2em;
`

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;
  margin-top: 30px;
`
const Button = styled.button`
  height: 50px;
  width: 150px;
  border: none;
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
`
export const ButtonViewProfile = styled(Button)``

export const ButtonAplly = styled(Button)``
