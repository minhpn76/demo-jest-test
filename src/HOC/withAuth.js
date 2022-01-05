import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom';

function withAuth(WrapComponent) {
  function withAuthHOC(props) {
    const location = useLocation()
    const navigate = useNavigate()

    const auth = useSelector(state => state.auth)

    useEffect(() => {
      if (!auth) {
        navigate('/')
      }
    }, [location.pathname])

    return <WrapComponent {...props}/>
  }
  return withAuthHOC
}

export default withAuth;