import { useState } from 'react'
import Header from '../../components/header'
import * as C from './style'
import Select from 'react-select'
import { useQuery } from '@tanstack/react-query'
import languagesServices from '../../services/languages'
function SearchProject() {
  const [levell, setLevel] = useState('')
  const [coreTech, setCoreTech] = useState('')
  const [technologies, setTechnologies] = useState<String[]>([])
  const { data, isLoading } = useQuery({
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
                options={data}
                styles={customStyles}
                onChange={(newValue) => {
                  console.log(newValue)
                  if (newValue) {
                    const value = newValue as { value: string; label: string }
                    setCoreTech(value.value)
                  } else {
                    setCoreTech('')
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
                options={data}
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
          <C.ContainerOptionFilter>
            <C.TittleInfo>Nivel de experiencia</C.TittleInfo>
            <C.ContainerOptions></C.ContainerOptions>
          </C.ContainerOptionFilter>

          <C.ButtonSubmit>BUSCAR</C.ButtonSubmit>
        </C.ContainerFilter>

        <C.ContainerList>
          <C.ContainerTeste></C.ContainerTeste>
        </C.ContainerList>
      </C.ContainerInfos>
    </C.ContainerSearchProject>
  )
}

export default SearchProject
