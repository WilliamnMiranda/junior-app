import styled, { keyframes } from 'styled-components'

const animationMenu = keyframes`
  from {
    height: 0;
  }

  to {
    height: 150px;
  }
`

interface INavigation {
  status: boolean
}

export const ContainerHeader = styled.header`
  padding: 0 320px;
  height: 75px;
  width: 100%;
  background-color: white;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  @media (max-width: 1480px) {
    padding: 0 50px;
    flex-direction: column;
  }
  @media (max-width: 925px) {
    padding: 0 5px;
    height: auto;
  }
  @media (max-width: 768px) {
    display: flex;
    padding: 10px 20px;
    height: auto;
    align-items: center;
    background-color: pink;
  }
`
export const ContainerIcon = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.5em;
  svg {
    display: none;
  }
  @media (max-width: 768px) {
    svg {
      display: block;
      cursor: pointer;
    }
  }
`
export const ContainerIconsAndLogoMobile = styled.div`
  justify-content: space-between;
  align-items: center;
  display: none;
  background-color: grey;
  height: auto;
  width: 100%;
  @media (max-width: 768px) {
    display: flex;
  }
`
export const ContainerLinkRouter = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
`
export const Logo = styled.div`
  margin-right: 15px;
  @media (max-width: 768px) {
    margin-right: 0px;
    margin-bottom: 20px;
    display: none;
  }
`
export const LogoMobile = styled(Logo)`
  @media (max-width: 768px) {
    display: block;
    margin-right: 0px;
    margin-bottom: 0px;
  }
`
export const Navigation = styled.nav<INavigation>`
  width: 100%;
  animation: ${animationMenu} 0.1s linear;
  overflow: hidden;
  @media (max-width: 768px) {
    margin-top: 20px;
    display: ${({ status }) => (status ? 'block' : 'none')};
  }
`
export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-weight: bold;
  a:visited {
    color: rgba(0, 0, 0, 0.6);
  }
  a:hover {
    color: pink;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const ContainerUser = styled.div``
export const ItemList = styled.li``
export const Link = styled.a``
export const ButtonLogin = styled.button`
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  font-weight: bold;
  border: none;
  width: 120px;
  height: 35px;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`
