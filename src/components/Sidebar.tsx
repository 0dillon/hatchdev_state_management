import UserProfile from './UserProfile'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../redux/user/userSlice'

const Sidebar = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <aside className="w-64 bg-[#5CE1E6] border-r-4 border-black p-6 flex flex-col justify-between">
      <div>
        <div className="text-3xl font-black mb-8 border-b-4 border-black pb-4 uppercase tracking-tighter">
          Dashboard
        </div>
        <UserProfile />
      </div>
      <button 
        onClick={handleLogout} 
        className="w-full bg-[#FF5757] hover:bg-[#ff3838] hover:-translate-y-1 transition-transform border-4 border-black text-black font-black uppercase py-3 px-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]"
      >
        Logout
      </button>
    </aside>
  )
}

export default Sidebar
