import React from 'react'
import { useParams } from 'react-router-dom'

function Users() {
  const {userId} = useParams()
  return (
    <>
      <h1 className='text-white bg-gray-600 text-3xl'>User: {userId}</h1>
    </>
  )
}

export default Users