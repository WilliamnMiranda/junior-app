import React, { FunctionComponent } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

interface IPrivateRoute {
  element: FunctionComponent
}
function PrivateRoute({ element: Element }: IPrivateRoute) {
  const { data, isSuccess } = useAuth()
  console.log(isSuccess + 'aaaaaaaaaaa')
  return isSuccess ? <Element /> : <Navigate to="/login" replace={true} />
}

export default PrivateRoute
