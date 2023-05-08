import { NavLink } from 'react-router-dom';
import React from 'react';
import * as C from './style.tsx';

function Header() {
  return (
    <C.ContainerHeader>
      <C.Navigation>
        <C.List>
          <C.ContainerLinkRouter>
            <NavLink to="/">
              <C.ItemList>
                Home
              </C.ItemList>
            </NavLink>
            <NavLink to="/">
              <C.ItemList>
                Criar um Projeto
              </C.ItemList>
            </NavLink>
            <NavLink to="/">
              <C.ItemList>
                Encontrar um projeto
              </C.ItemList>
            </NavLink>
            <NavLink to="/">
              <C.ItemList>
                Competições
              </C.ItemList>
            </NavLink>
          </C.ContainerLinkRouter>
          <C.ContainerUser />
        </C.List>
      </C.Navigation>
    </C.ContainerHeader>
  );
}

export default Header;
