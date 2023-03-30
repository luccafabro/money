import React from 'react'
import Login from '../components/Login'
import Register from '../components/Register'

const logged = false

export default function App() {
  if(logged == false){
    return (
      <Register/>
    )
  }
  else{
    return (
      <Login/>
    )
  }
}

