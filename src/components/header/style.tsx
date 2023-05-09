import styled from 'styled-components'

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
  @media (max-width: 1480px) {
    padding: 0 50px;
    flex-direction: column;
  }
  @media (max-width: 925px) {
    padding: 0 5px;
  }
  @media (max-width: 768px) {
    padding: 10px 20px;
    height: auto;
    align-items: flex-start;
    background-color: red;
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
  height: 40px;
  width: 100%;
  margin-bottom: 20px;
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
  @media (max-width: 768px) {
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
