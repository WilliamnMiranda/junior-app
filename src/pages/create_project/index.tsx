import React from 'react'
import * as C from './style'
import Header from '../../components/header'
function CreateProject() {
  return (
    <>
      <Header />
      <C.HeaderCreateJob> Create a job </C.HeaderCreateJob>
      <C.ContainerCreateProject>
        <C.ContainerInfosProject>
          <C.ContainerOneInput>
            <C.ContainerInfo>
              <C.Label>Nome do projeto</C.Label>
              <C.Input />
            </C.ContainerInfo>
          </C.ContainerOneInput>
          <C.ContainerTwoInputs></C.ContainerTwoInputs>
        </C.ContainerInfosProject>
      </C.ContainerCreateProject>
    </>
  )
}

export default CreateProject
