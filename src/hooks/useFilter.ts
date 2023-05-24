import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import languagesServices from '../services/languages'

export const useFilter = () => {
  const { data: languages, isLoading } = useQuery({
    queryKey: ['languages'],
    queryFn: () => languagesServices.getAll(),
  })
  const queryClient = useQueryClient()
  const [name, setName] = useState('')
  const [level, setLevel] = useState('')
  const [technologies, setTechnologies] = useState<String[]>([])
  const [functions, setFunctions] = useState([])
  const [coreTechnology, setCoreTechnology] = useState('')
  return {
    setLevel,
    languages,
    isLoading,
    setCoreTechnology,
    setFunctions,
    setTechnologies,
  }
}
