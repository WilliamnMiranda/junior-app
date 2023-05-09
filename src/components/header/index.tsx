import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import * as C from './style.tsx'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import useHeader from '../../hooks/useHeader.ts'
function Header() {
  const { statusMenu, setStatusMenu, toggleMenu } = useHeader()
  return (
    <C.ContainerHeader>
      <C.ContainerIconsAndLogoMobile>
        <C.LogoMobile> Mylogo </C.LogoMobile>
        {statusMenu ? (
          <C.ContainerIcon onClick={() => setStatusMenu(false)}>
            <AiOutlineClose />
          </C.ContainerIcon>
        ) : (
          <C.ContainerIcon onClick={() => setStatusMenu(true)}>
            <AiOutlineMenu />
          </C.ContainerIcon>
        )}
      </C.ContainerIconsAndLogoMobile>
      <C.Navigation status={statusMenu}>
        <C.List>
          <C.Logo> Mylogo </C.Logo>
          <C.ContainerLinkRouter>
            <NavLink to="/">
              <C.ItemList>Home</C.ItemList>
            </NavLink>
            <NavLink to="/">
              <C.ItemList>Criar um Projeto</C.ItemList>
            </NavLink>
            <NavLink to="/">
              <C.ItemList>Encontrar um projeto</C.ItemList>
            </NavLink>
            <NavLink to="/">
              <C.ItemList>Competições</C.ItemList>
            </NavLink>
          </C.ContainerLinkRouter>
          <C.ContainerUser>
            <C.ButtonLogin> ENTRAR </C.ButtonLogin>
          </C.ContainerUser>
        </C.List>
      </C.Navigation>
    </C.ContainerHeader>
  )
}

export default Header
