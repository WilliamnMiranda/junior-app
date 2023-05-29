import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`
export const ContainerElement = styled.section`
  width: 100%;
  overflow-x: auto;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`
export const Aside = styled.aside`
  background-color: rgb(25, 25, 25);
  width: 300px;
  color: white;
  height: 100%;
  top: 0px;
  position: sticky;
  display: flex;
  flex-direction: column;
  top: 0px;
  padding: 20px 0px;
`
export const ItemAside = styled.a`
  padding: 20px 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-family: 'Inter', sans-serif;
  font-size: 0.9em;
  display: flex;
  align-items: center;
  gap: 10px;
  text-transform: uppercase;
  svg {
    font-size: 1.3em;
  }
`
