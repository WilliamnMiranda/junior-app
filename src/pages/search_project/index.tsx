import { level } from '../../utils/project'
import Header from '../../components/header'
import * as C from './style'
import Select from 'react-select'
import { useQuery } from '@tanstack/react-query'
import Project from '../../components/filterComponent'
import projectServices from '../../services/projectService'
import { useFilter } from '../../hooks/useFilter'
function SearchProject() {
  const { data, isLoading } = useQuery({
    queryKey: ['projects_recents'],
    queryFn: () => projectServices.recents(),
  })

  const { setLevel, languages, setCoreTechnology, setTechnologies } = useFilter()
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
  return (
    <C.ContainerSearchProject>
      <Header />
      <C.ContainerInfos>
        <C.ContainerFilter>
          <C.ContainerOptionFilter>
            <C.TittleInfo>Nivel de experiencia</C.TittleInfo>
            <C.ContainerOptions>
              <Select
                options={level}
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
            </C.ContainerOptions>
          </C.ContainerOptionFilter>
          <C.ContainerOptionFilter>
            <C.TittleInfo>Principal tecnologia</C.TittleInfo>
            <C.ContainerOptions>
              <Select
                options={languages}
                styles={customStyles}
                onChange={(newValue) => {
                  if (newValue) {
                    const value = newValue as { value: string; label: string }
                    setCoreTechnology(value.value)
                  } else {
                    setCoreTechnology('')
                  }
                }}
              />
            </C.ContainerOptions>
          </C.ContainerOptionFilter>
          <C.ContainerOptionFilter>
            <C.TittleInfo>Tecnologias</C.TittleInfo>
            <C.ContainerOptions>
              <Select
                closeMenuOnSelect={false}
                isMulti
                options={languages}
                styles={customStyles}
                onChange={(currentValue) => {
                  const newValue = currentValue.map((item: any) => item.value)
                  if (newValue.length > 0) {
                    setTechnologies(newValue)
                  } else setTechnologies([])
                }}
              />
            </C.ContainerOptions>
          </C.ContainerOptionFilter>
          <C.ContainerOptionFilter>
            <C.TittleInfo>Funcao</C.TittleInfo>
            <C.ContainerOptions>
              <Select
                closeMenuOnSelect={false}
                isMulti
                options={languages}
                styles={customStyles}
                onChange={(currentValue) => {
                  const newValue = currentValue.map((item: any) => item.value)
                  if (newValue.length > 0) {
                    setTechnologies(newValue)
                  } else setTechnologies([])
                }}
              />
            </C.ContainerOptions>
          </C.ContainerOptionFilter>
          <C.ContainerOptionFilter>
            <C.TittleInfo>Nivel de experiencia</C.TittleInfo>
            <C.ContainerOptions></C.ContainerOptions>
          </C.ContainerOptionFilter>
          <C.ContainerOptionFilter>
            <C.TittleInfo>Nivel de experiencia</C.TittleInfo>
            <C.ContainerOptions></C.ContainerOptions>
          </C.ContainerOptionFilter>

          <C.ButtonSubmit>BUSCAR</C.ButtonSubmit>
        </C.ContainerFilter>

        <C.ContainerList>
          <C.TittleList>Listagem de projetos</C.TittleList>
          <C.ContainerListProjects>
            {data?.map((project: any) => {
              return <Project project={project} />
            })}
          </C.ContainerListProjects>
        </C.ContainerList>
      </C.ContainerInfos>
    </C.ContainerSearchProject>
  )
}

export default SearchProject
