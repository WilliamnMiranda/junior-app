import Select from 'react-select'
import * as C from './style'
import Header from '../../components/header'
import { useCreateProject } from '../../hooks/useCreateProject'
import { useQuery } from '@tanstack/react-query'
import languagesServices from '../../services/languages'
function CreateProject() {
  const { data } = useQuery({
    queryKey: ['languages'],
    queryFn: () => languagesServices.getAll(),
  })
  const level = [
    { value: 'junior', label: 'junior' },
    { value: 'pleno', label: 'pleno' },
    { value: 'senior', label: 'senior' },
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
  const {
    setLevel,
    setName,
    setTechnologies,
    setFunctions,
    setDescription,
    setOwnerLinkedin,
    setCoreTechnology,
    createProject,
  } = useCreateProject()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    createProject()
  }
  return (
    <>
      <Header />
      <C.HeaderCreateJob> CRIAR UM NOVO PROJETO </C.HeaderCreateJob>
      <C.ContainerCreateProject>
        <C.ContainerInfosProject onSubmit={handleSubmit}>
          <C.ContainerOneInput>
            <C.ContainerInfo>
              <C.Label>Nome do projeto</C.Label>
              <C.Input
                placeholder="Aplicativo de delivery"
                onChange={(e) => setName(e.target.value)}
                data-testid="name"
              />
            </C.ContainerInfo>
          </C.ContainerOneInput>
          <C.ContainerTwoInputs>
            <C.ContainerInfoTwoInputs>
              <C.Label>Nivel de experiencia requerido</C.Label>
              <Select
                options={level}
                styles={customStyles}
                placeholder="Selecione seu nivel"
                data-testid="level"
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
                options={data}
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
              <C.Input
                placeholder="https://www.linkedin.com/in/myusername/"
                onChange={(e) => setOwnerLinkedin(e.target.value)}
              />
            </C.ContainerInfo>
          </C.ContainerOneInput>
          <C.ContainerTwoInputs>
            <C.ContainerInfoTwoInputs>
              <C.Label>Tecnologia principal</C.Label>
              <Select
                data-testid="ownerTech"
                options={data}
                styles={customStyles}
                placeholder="Qual a tecnologia princpal"
                onChange={(newValue) => {
                  if (newValue) {
                    const value = newValue as { value: string; label: string }
                    setCoreTechnology(value.value)
                  } else {
                    setCoreTechnology('')
                  }
                }}
              />
            </C.ContainerInfoTwoInputs>
            <C.ContainerInfoTwoInputs>
              <C.Label>Tecnologias do projeto</C.Label>
              <Select
                closeMenuOnSelect={false}
                isMulti
                options={data}
                placeholder="Tecnologias utilizadas no projeto"
                styles={customStyles}
                data-testid="techs"
                onChange={(currentValue) => {
                  const newValue = currentValue.map((item: any) => item.value)
                  if (newValue.length > 0) {
                    setTechnologies(newValue)
                  } else setTechnologies([])
                }}
              />
            </C.ContainerInfoTwoInputs>
          </C.ContainerTwoInputs>
          <C.ContainerOneInput style={{ marginTop: '20px' }}>
            <C.ContainerInfo>
              <C.Label>Descricao do projeto</C.Label>
              <C.InputDescription
                data-testid="description"
                placeholder="O projeto ..."
                onChange={(e) => setDescription(e.target.value)}
              />
            </C.ContainerInfo>
          </C.ContainerOneInput>
          <C.ButtonSubmit> CRIAR </C.ButtonSubmit>
        </C.ContainerInfosProject>
      </C.ContainerCreateProject>
    </>
  )
}

export default CreateProject
