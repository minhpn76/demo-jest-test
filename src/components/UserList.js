import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom';

function UserList() {

  //TODO: check condition without login
  const location = useLocation()
  const navigate = useNavigate()

  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if (!auth) {
      navigate('/')
    }
  }, [location.pathname])
  
  return (
    <>
      <h4>User List</h4>
    </>

  )
}

export default UserList;
