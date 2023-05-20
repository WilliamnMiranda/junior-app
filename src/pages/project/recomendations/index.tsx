import React from 'react'
import * as C from './style'
import { useQuery } from '@tanstack/react-query'
import projectServices from '../../../services/projectService'
import languages from '../../../utils/languages'

function Recomendations() {
  const { data, isLoading } = useQuery({
    queryKey: ['projects_recents'],
    queryFn: () => projectServices.recents(),
  })
  return (
    <C.ContainerRecomendations>
      {data.map((project: any) => {
        return (
          <C.Project>
            <C.ContainerImageProject>
              <C.ImageProject src={languages[project.coreTechnology.toString()].icon} />
            </C.ContainerImageProject>
          </C.Project>
        )
      })}
    </C.ContainerRecomendations>
  )
}

export default Recomendations
