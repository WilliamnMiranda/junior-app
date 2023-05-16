import React, { FunctionComponent } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

interface IPrivateRoute {
  element: FunctionComponent
}
function PrivateRoute({ element: Element }: IPrivateRoute) {
  const { data, isLoading } = useAuth()
  return isLoading ? <div>carregando</div> : data ? <Element /> : <Navigate to="/login" replace={true} />
}

export default PrivateRoute
