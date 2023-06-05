import styled from 'styled-components'

export const ContainerProject = styled.article`
  display: flex;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  gap: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`
export const ContainerInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
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

export const ContainerIconsAndName = styled.section`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`
export const ContainerItemView = styled.div``
export const ContainerNameUserSubscription = styled.div`
  display: flex;
  align-items: center;
  justify-content: cente;
  gap: 5px;
  div {
    font-weight: bold;
  }
`
export const NameUserSubscription = styled.p`
  font-family: 'Roboto', sans-serif;
`
export const ContainerIcons = styled.div`
  display: flex;
  gap: 20px;
`
