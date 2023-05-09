import styled from 'styled-components'

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
  }
`
export const Navigation = styled.nav`
  width: 100%;
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
