import { useState } from 'react'
import { api } from '../helpers/api'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import projectServices from '../services/projectService'
import { useNavigate } from 'react-router-dom'

export const useCreateProject = () => {
  const queryClient = useQueryClient()
  const [name, setName] = useState('')
  const [ownerLinkedin, setOwnerLinkedin] = useState('')
  const [description, setDescription] = useState('')
  const [level, setLevel] = useState('')
  const [technologies, setTechnologies] = useState<String[]>([])
  const [functions, setFunctions] = useState([])
  const [coreTechnology, setCoreTechnology] = useState('')
  const navigate = useNavigate()
  console.log(technologies)
  const mutation = useMutation((data: any) => projectServices.create(data), {
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['projects_recents'] })
      navigate('/')
    },
  })

  const createProject = () => {
    const data = {
      name,
      technologies,
      description,
      coreTechnology,
      ownerLinkedin,
      level,
    }
    mutation.mutate(data)
  }

  return {
    setName,
    setLevel,
    setTechnologies,
    setDescription,
    setFunctions,
    setOwnerLinkedin,
    createProject,
    setCoreTechnology,
  }
}
