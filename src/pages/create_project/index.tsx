import Select from 'react-select'
import * as C from './style'
import Header from '../../components/header'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/index'
function CreateProject() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      width: '100%',
    }),
    menu: (provided: any) => ({
      ...provided,
      width: '100%',
    }),
  }
  const user = useSelector<RootState>((state) => state.user)
  console.log(user)
  return (
    <>
      <Header />
      <C.HeaderCreateJob> CRIAR UM NOVO PROJETO </C.HeaderCreateJob>
      <C.ContainerCreateProject>
        <C.ContainerInfosProject>
          <C.ContainerOneInput>
            <C.ContainerInfo>
              <C.Label>Nome do projeto</C.Label>
              <C.Input />
            </C.ContainerInfo>
          </C.ContainerOneInput>
          <C.ContainerTwoInputs>
            <C.ContainerInfoTwoInputs>
              <C.Label>Nivel de experiencia requerido</C.Label>
              <Select options={options} styles={customStyles} />
            </C.ContainerInfoTwoInputs>
            <C.ContainerInfoTwoInputs>
              <C.Label>Funcaos necessarias</C.Label>
              <Select closeMenuOnSelect={false} isMulti options={options} styles={customStyles} />
            </C.ContainerInfoTwoInputs>
          </C.ContainerTwoInputs>
          <C.ContainerOneInput style={{ marginTop: '20px' }}>
            <C.ContainerInfo>
              <C.Label>Link do Perfil do linkedin</C.Label>
              <C.Input />
            </C.ContainerInfo>
          </C.ContainerOneInput>
          <C.ContainerTwoInputs>
            <C.ContainerInfoTwoInputs>
              <C.Label>Tecnologia principal</C.Label>
              <Select options={options} styles={customStyles} />
            </C.ContainerInfoTwoInputs>
            <C.ContainerInfoTwoInputs>
              <C.Label>Tecnologias do projeto</C.Label>
              <Select closeMenuOnSelect={false} isMulti options={options} styles={customStyles} />
            </C.ContainerInfoTwoInputs>
          </C.ContainerTwoInputs>
          <C.ContainerOneInput style={{ marginTop: '20px' }}>
            <C.ContainerInfo>
              <C.Label>Descricao do projeto</C.Label>
              <C.InputDescription />
            </C.ContainerInfo>
          </C.ContainerOneInput>
          <C.ButtonSubmit> CRIAR </C.ButtonSubmit>
        </C.ContainerInfosProject>
      </C.ContainerCreateProject>
    </>
  )
}

export default CreateProject
