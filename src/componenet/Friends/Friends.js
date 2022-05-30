import React, { useEffect, useState } from 'react'
import Friend from '../Friend/Friend';
import './Friends.css'

function Friends() {
  const [friends, setFriends] = useState([]);
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setFriends(data))
  },[])
  return (
    <div>
      <h1>
        I hava {friends.length} friends.
      </h1>
      <div className='friends-container'>
        {
          friends.map(friend => <Friend
            friend ={friend}
            key = {friend.id}
          ></Friend>)
        }

      </div>
      </div>
  )
}

export default Friends