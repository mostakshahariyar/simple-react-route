import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function FriendDetails() {
  const {friendId} = useParams();
  const [friend, setFriend] = useState({});
  useEffect(()=> {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
    fetch(url)
    .then(res => res.json())
    .then(data => setFriend(data))
  },[])
  // console.log(friend)
  return (
    <div>
      Friend id : {friendId}
      <h3>Name: {friend.name}</h3>
      <h3>Phone: {friend.phone}</h3>
      <p>at work: {friendId.company?.name}</p>
      
      </div>
  )
}

export default FriendDetails