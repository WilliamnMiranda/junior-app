import React from 'react'
import * as C from './style'

interface ITypes {
  url: string
  name: String
}
function Types({ url, name }: ITypes) {
  return (
    <C.ContainerType>
      <C.IconImage src={url} />
    </C.ContainerType>
  )
}

export default Types
