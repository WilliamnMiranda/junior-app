import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import * as C from './style.tsx'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import useHeader from '../../hooks/useHeader.ts'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/index.tsx'
function Header() {
  const { statusMenu, setStatusMenu } = useHeader()
  const user: any = useSelector<RootState>((state) => state.user)
  console.log(user.authenticate)
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
            <NavLink to="/create/project">
              <C.ItemList>Criar um Projeto</C.ItemList>
            </NavLink>
            <NavLink to="/search">
              <C.ItemList>Encontrar um projeto</C.ItemList>
            </NavLink>
            <NavLink to="/">
              <C.ItemList>Competições</C.ItemList>
            </NavLink>
          </C.ContainerLinkRouter>
          {user.authenticate ? (
            <div>logado</div>
          ) : (
            <NavLink to="/login">
              <C.ButtonLogin> ENTRAR </C.ButtonLogin>
            </NavLink>
          )}
        </C.List>
      </C.Navigation>
    </C.ContainerHeader>
  )
}

export default Header
