import React from 'react'
import * as C from './style'
function CreateProject() {
  return (
    <C.ContainerCreateProject>
      <C.HeaderCreateJob> Create a job </C.HeaderCreateJob>

      <C.ContainerInfosProject>
        <C.ContainerOneInput>
          <C.ContainerInfo>
            <C.Label>Qual nome do projeto ?</C.Label>
            <C.Input />
          </C.ContainerInfo>
        </C.ContainerOneInput>
        <C.ContainerTwoInputs></C.ContainerTwoInputs>
      </C.ContainerInfosProject>
    </C.ContainerCreateProject>
  )
}

export default CreateProject
