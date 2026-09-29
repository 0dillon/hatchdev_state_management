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
      dispatch(setUser({ name, email }))
    }
  }

  return (
    <div className="bg-[#b8e994] border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <h2 className="text-3xl font-black uppercase mb-6 tracking-tighter bg-white inline-block px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        Login Portal
      </h2>
      <p className="font-bold text-lg mb-6">Welcome Back, Please Login to Continue</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block font-black uppercase text-lg">Full Name</label>
          <input 
            id="name" 
            name="name" 
            value={name} 
            type="text" 
            onChange={(e) => setName(e.target.value)} 
            required 
            placeholder="Enter your full name" 
            className="w-full bg-white border-4 border-black p-3 font-bold placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-[#FFDE59] transition-shadow shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="block font-black uppercase text-lg">Email</label>
          <input 
            id="email" 
            name="email" 
            value={email} 
            type="email" 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            placeholder="Enter your email" 
            className="w-full bg-white border-4 border-black p-3 font-bold placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-[#FFDE59] transition-shadow shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          />
        </div>
        
        <button 
          type="submit"
          className="w-full bg-[#FFDE59] hover:bg-[#f6d03d] hover:-translate-y-1 transition-transform border-4 border-black text-black font-black uppercase py-4 text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
