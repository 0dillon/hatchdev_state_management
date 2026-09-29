import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'

const UserProfile = () => {
  const user = useSelector((state: RootState) => state.user)
  return (
    <div className="flex flex-col gap-2 text-sm font-bold">
      {user.name && user.email ? (
        <>
          <div className="flex items-center gap-2">
            <span className="bg-black text-white px-2 py-0.5 uppercase text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]">Name</span>
            <span>{user.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-black text-white px-2 py-0.5 uppercase text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]">Email</span>
            <span>{user.email}</span>
          </div>
        </>
      ) : (
        <span className="uppercase text-black font-black bg-[#FF5757] px-2 py-1 border-2 border-black inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Not Logged In</span>
      )}
    </div>
  )
}

export default UserProfile
