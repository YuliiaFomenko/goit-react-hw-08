import React from 'react'
import { useSelector } from 'react-redux'
import { selectLoggedIn } from '../../redux/auth/selectors'
import { Navigate } from 'react-router-dom'


const PrivateRoute = ({children}) => {
  const isLoggedIn = useSelector(selectLoggedIn)

  if (!isLoggedIn){
    return <Navigate to="/login"/>
  }

  return children;
}

export default PrivateRoute