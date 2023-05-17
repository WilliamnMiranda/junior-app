import { useState } from 'react'
import { api } from '../helpers/api'
import { useQuery } from '@tanstack/react-query'

export const useCreateProject = () => {
  const [name, setName] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [description, setDescription] = useState('')
  const [level, setLevel] = useState('')
  const [tech, setTechs] = useState([])
  const [functions, setFunctions] = useState([])

  const { data: options, isLoading } = useQuery({
    queryKey: ['options'],
    queryFn: () => api.get('/options'),
  })

  console.log(options, isLoading)
  const createProject = () => {
    const data = {}
  }

  return {
    setName,
    setLevel,
    setTechs,
    setDescription,
    setFunctions,
    setLinkedin,
    createProject,
  }
}
