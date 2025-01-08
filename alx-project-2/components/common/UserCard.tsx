import { UserProps } from '@/interfaces'
import React from 'react'

const UserCard: React.FC<UserProps> = ({name, email, address}) => {
  return (
    <div className='p-4 rounded bg-gray-200'>
      <h2 className='text-lg font-bold mb-4'>{name}</h2>
      <p className='mb-2'>{email}</p>
      <p>{address}</p>
    </div>
  )
}

export default UserCard