import UserCard from '@/components/common/UserCard'
import { UserProps } from '@/interfaces'
import React, { useEffect, useState } from 'react'

const users = () => {
  const [userData, setUserData] = useState<UserProps[]>([])

  const fetchUser = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url)
    const data = await response.json();
    setUserData(data);
  } 

  useEffect(() => {
  fetchUser();
  }, [])
  
  return (
    <div>
      {userData.map(user =>
        <UserCard 
        key={user.id}
        name={user.name}
        email={user.email}
        address={user.address.city}/>
      )}
      
    </div>
  )
}

export default users