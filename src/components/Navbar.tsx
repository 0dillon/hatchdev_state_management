import UserProfile from './UserProfile'

const Navbar = () => {
  return (
    <nav className="h-24 bg-[#FFDE59] border-b-4 border-black flex items-center justify-between px-8">
      <h1 className="text-2xl font-black uppercase tracking-tight bg-white border-4 border-black px-4 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">HatchDev</h1>
      <div className="bg-white border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold">
        <UserProfile />
      </div>
    </nav>
  )
}

export default Navbar
