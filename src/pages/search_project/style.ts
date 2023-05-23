import styled from 'styled-components'

export const ContainerSearchProject = styled.div`
  width: 100%;
  background-color: #f7f9fa;
  overflow: hidden;
`
export const ContainerInfos = styled.div`
  margin-top: 20px;
  padding: 0px 30px;
  display: flex;
  gap: 50px;
  height: calc(100vh - 100px);
`

export const ContainerFilter = styled.section`
  width: 20%;
  background-color: white;
  position: sticky;
  top: 75px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`

export const ContainerList = styled.section`
  width: 70%;
  height: calc(100vh - 100px);
`
export const ContainerTeste = styled.div``

export const ContainerOptionFilter = styled.div``
export const TittleInfo = styled.h3`
  padding: 15px 10px;
  background-color: rgb(243, 243, 243);
  color: rgb(86, 86, 86);
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 0.9em;
`
export const ContainerOptions = styled.div`
  padding: 10px 0px;
`

export const ButtonSubmit = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  background-color: rgb(13, 149, 225);
  color: white;
`
export const ContainerListProjects = styled.div`
  width: 100%;
  height: 90%;
  padding: 20px 0px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  overflow-x: auto;
  ::-webkit-scrollbar {
    width: 15px;
  }
  ::-webkit-scrollbar-track {
    width: 15px;
    background-color: white;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(92, 202, 232); /* color of the scroll thumb */
  }
`
export const TittleList = styled.h3`
  color: rgb(86, 86, 86);
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 1.4em;
`
