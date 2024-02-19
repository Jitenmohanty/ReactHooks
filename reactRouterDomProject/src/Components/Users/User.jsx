import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const {userid} = useParams();
  return (
    <div className='bg-gray-700 p-4 text-yellow-100 text-center text-2xl'>
      <h1>User: {userid}</h1>
    </div>
  )
}

export default User
