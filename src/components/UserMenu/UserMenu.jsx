import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../redux/auth/authSelectors'
import { logOutThunk } from '../../redux/auth/authOperations'
import { Button } from '@mui/material'

const UserMenu = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <h3>Welcome, {user.name}</h3>
      <Button type="button" onClick={() => dispatch(logOutThunk())} variant="contained">
        Logout
      </Button>
    </div>
  );
}

export default UserMenu