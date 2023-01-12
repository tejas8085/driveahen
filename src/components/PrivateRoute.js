import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

import useAuthentication from './useAuthentication'
import { Outlet, Navigate } from 'react-router-dom'



const PrivateRoute = (props) => {
  const {isLogged,checkingStatus}  = useAuthentication()  
  if(checkingStatus) {
    return <ClipLoader
      color="#ffffff"
      loading={true}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
     />
  }
  return isLogged ? <Outlet /> : <Navigate to={props.route} />
}

export default PrivateRoute