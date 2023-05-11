import styled from 'styled-components'

export const ContainerHomePage = styled.main`
  width: 100%;
`

export const SearchByType = styled.section`
  height: 220px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1480px) {
    padding: 0 50px;
  }
  @media (max-width: 925px) {
    padding: 0 5px;
  }
  @media (max-width: 768px) {
    height: auto;
    padding: 30px 10px;
  }
`
export const Content = styled.article`
  text-align: center;
  width: 55%;
  @media (max-width: 925px) {
    width: 100%;
  }
`

export const TittleSearch = styled.h1`
  color: white;
  line-height: 120%;
  font-size: 1.7em;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
  margin-bottom: 15px;
  @media (max-width: 925px) {
    font-size: 1.6em;
  }
`
export const SubTittleSearch = styled.h2`
  color: white;
  line-height: 120%;
  font-size: 0.9em;
  text-align: center;
  font-weight: 500;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Roboto', sans-serif;
  @media (max-width: 925px) {
    font-size: 0.8em;
  }
`

export const ContainerInputSearch = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`
export const InputSearch = styled.input`
  width: 70%;
  outline: none;
  height: 35px;
  font-family: 'Inter', sans-serif;
  padding: 0px 10px;
  @media (max-width: 925px) {
    font-size: 80%;
  }
`
export const ButtonSearchByType = styled.button`
  width: 200px;
  height: 35px;
  font-size: 0.9em;
  background-color: rgb(13, 149, 225);
  font-family: 'Roboto', sans-serif;
  color: rgba(255, 255, 255, 1);
  border: none;
  cursor: pointer;
  @media (max-width: 925px) {
    flex: 1;
    font-size: 0.8em;
  }
`

export const PopularTypes = styled.section`
  padding: 20px 320px 50px 320px;
  display: flex;
  flex-direction: column;
  background: #f6f7fa;
  @media (max-width: 1480px) {
    padding: 0 50px;
  }
  @media (max-width: 925px) {
    padding: 0 5px;
  }
  @media (max-width: 768px) {
    display: flex;
    padding: 10px 20px;
    height: auto;
    align-items: center;
  }
`
export const ContainerIconsLanguages = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
  @media (max-width: 1225px) {
    gap: 30px;
  }
  @media (max-width: 925px) {
    gap: 10px;
  }
`
export const TittlePopularLanguages = styled.h2`
  font-family: 'Poppins', sans-serif;
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 20px;
`
export const ContainerIcon = styled.div`
  padding: 25px;
  background-color: white;
  cursor: pointer;
  @media (max-width: 1321px) {
    padding: 20px;
  }
  @media (max-width: 925px) {
    padding: 20px;
  }
`
export const IconLanguage = styled.img`
  width: 50px;
  height: 50px;
  @media (max-width: 925px) {
    width: 40px;
    height: 40px;
  }
`
export const ContainerRecentsProject = styled.section`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`

export const ContainerProjects = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px 320px 50px 320px;
  @media (max-width: 1480px) {
    padding: 0 50px;
  }
  @media (max-width: 925px) {
    padding: 0 5px;
  }
  @media (max-width: 768px) {
    height: auto;
    padding: 30px 10px;
  }
`
