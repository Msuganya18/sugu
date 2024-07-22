import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../Login/Login.css"

const Login = () => {
  const navi = useNavigate()
  const handalert = () =>
  {
    navi("/Sign")
    alert("You are Logged in!!!!")
  }
  return (
    <div>
      <form>
        <h1>SIGNUP</h1>
        <label>Username</label>
        <input type="text"></input>
        <label>Email Address</label>
        <input type="text"></input>
        <label>Password</label>
        <input type="password"></input>
        <button onClick={handalert}>Login</button>
        <a>Already have an Account?</a>
      </form>
    </div>
  )
}

export default Login