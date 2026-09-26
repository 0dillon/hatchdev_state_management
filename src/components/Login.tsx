import React from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/user/userSlice'

const Login = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (name && email) {
      // Perform login logic here
      console.log('Logging in with:', { name, email })
      dispatch(setUser({ name, email }))
    }
  }


  return (
    <div>
      Welcome Back, Please Login to Continue

      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label htmlFor="name">Full Name</label>
            <input id="name" name="name" value={name} type="text" onChange={(e) => setName(e.target.value)} required placeholder="Enter your full name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" value={email} type="email" onChange={(e) => setEmail(e.target.value)} required placeholder="Enter your email" />
          </div>
          <button type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login