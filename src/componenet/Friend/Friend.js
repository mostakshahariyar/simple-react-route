import React from 'react'
import { Link } from 'react-router-dom';

function Friend(props) {
  const {id, name, email, phone} = props.friend;
  const friendStyle = {
    backgroundColor: 'gray',
    borderRadius: '20px',
    color: 'white',
    padding: '10px',
    border: '2px solid yellow',
    margin: '.5rem'
  }
  const handelClick = friendId =>{
    const url = friendId;
    console.log(url); 
  }

 
  return (
    <div style={friendStyle}>
      <h2>Name: {name}</h2>
      <h2>Email: {email}</h2>
      <h2>Phone: {phone}</h2>
      <p>Address: {props.friend.address.city}</p>
      <Link to ={`/friend/${id}`}>visit me</Link>
      <Link to = {`/friend/${id}`}>
        <button>Visit me</button>
      </Link>
      <button onClick={() =>{handelClick(`/friend/${id}`)}}>Visit me2</button>
    </div>
  )
}

export default Friend