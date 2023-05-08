import React from 'react'
import * as C from './style'
const index = () => {
  return (
    <C.ContainerHeader>
       <C.Navigation>
          <C.List>
              <C.ContainerLinkRouter>
                  <C.Link> Home</C.Link>
                  <C.Link> Criar um Projeto</C.Link>
                  <C.Link> Encontrar um projeto </C.Link>
                  <C.Link> Competições </C.Link>
              </C.ContainerLinkRouter>
              <C.ContainerUser>
                
              </C.ContainerUser>
          </C.List>
      </C.Navigation>
    </C.ContainerHeader>
  )
}

export default index