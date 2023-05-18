import { useState } from 'react'
import { api } from '../helpers/api'
import { useMutation, useQuery } from '@tanstack/react-query'
import projectServices from '../services/projectService'
import { useNavigate } from 'react-router-dom'

export const useCreateProject = () => {
  const [name, setName] = useState('')
  const [ownerLinkedin, setOwnerLinkedin] = useState('')
  const [description, setDescription] = useState('')
  const [level, setLevel] = useState('')
  const [technologies, setTechnologies] = useState([])
  const [functions, setFunctions] = useState([])
  const [coreTechnology, setCoreTechnology] = useState('')
  const navigate = useNavigate()

  const mutation = useMutation((data: any) => projectServices.create(data), {
    onSuccess: (data) => {
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
