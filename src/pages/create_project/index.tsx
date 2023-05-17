import Select from 'react-select'
import * as C from './style'
import Header from '../../components/header'
import { useCreateProject } from '../../hooks/useCreateProject'
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
  const { setLevel, setName, setTechs, setFunctions, setDescription, setLinkedin } = useCreateProject()
  return (
    <>
      <Header />
      <C.HeaderCreateJob> CRIAR UM NOVO PROJETO </C.HeaderCreateJob>
      <C.ContainerCreateProject>
        <C.ContainerInfosProject>
          <C.ContainerOneInput>
            <C.ContainerInfo>
              <C.Label>Nome do projeto</C.Label>
              <C.Input onChange={(e) => setName(e.target.value)} />
            </C.ContainerInfo>
          </C.ContainerOneInput>
          <C.ContainerTwoInputs>
            <C.ContainerInfoTwoInputs>
              <C.Label>Nivel de experiencia requerido</C.Label>
              <Select
                options={options}
                styles={customStyles}
                onChange={(newValue) => {
                  if (newValue) {
                    const { value } = newValue
                    setLevel(value)
                  } else {
                    setLevel('')
                  }
                }}
              />
            </C.ContainerInfoTwoInputs>
            <C.ContainerInfoTwoInputs>
              <C.Label>Funcaos necessarias</C.Label>
              <Select
                closeMenuOnSelect={false}
                isMulti
                options={options}
                styles={customStyles}
                onChange={(selectedOptions: any) => {
                  if (selectedOptions) {
                    const selectedValues = selectedOptions.map((option: any) => option.value)
                    setFunctions(selectedValues)
                  } else {
                    setFunctions([])
                  }
                }}
              />
            </C.ContainerInfoTwoInputs>
          </C.ContainerTwoInputs>
          <C.ContainerOneInput style={{ marginTop: '20px' }}>
            <C.ContainerInfo>
              <C.Label>Link do Perfil do linkedin</C.Label>
              <C.Input onChange={(e) => setLinkedin(e.target.value)} />
            </C.ContainerInfo>
          </C.ContainerOneInput>
          <C.ContainerTwoInputs>
            <C.ContainerInfoTwoInputs>
              <C.Label>Tecnologia principal</C.Label>
              <Select
                options={options}
                styles={customStyles}
                onChange={(newValue) => {
                  if (newValue) {
                    const { value } = newValue
                    setLevel(value)
                  } else {
                    setLevel('')
                  }
                }}
              />
            </C.ContainerInfoTwoInputs>
            <C.ContainerInfoTwoInputs>
              <C.Label>Tecnologias do projeto</C.Label>
              <Select
                closeMenuOnSelect={false}
                isMulti
                options={options}
                styles={customStyles}
                onChange={(selectedOptions: any) => {
                  if (selectedOptions) {
                    const selectedValues = selectedOptions.map((option: any) => option.value)
                    setTechs(selectedValues)
                  } else {
                    setTechs([])
                  }
                }}
              />
            </C.ContainerInfoTwoInputs>
          </C.ContainerTwoInputs>
          <C.ContainerOneInput style={{ marginTop: '20px' }}>
            <C.ContainerInfo>
              <C.Label>Descricao do projeto</C.Label>
              <C.InputDescription onChange={(e) => setDescription(e.target.value)} />
            </C.ContainerInfo>
          </C.ContainerOneInput>
          <C.ButtonSubmit> CRIAR </C.ButtonSubmit>
        </C.ContainerInfosProject>
      </C.ContainerCreateProject>
    </>
  )
}

export default CreateProject
