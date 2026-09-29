import Navbar from './components/Navbar'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import UserPage from './components/UserPage'

const App = () => {
  return (
    <div className="flex min-h-screen bg-[#f4f4f0] font-sans text-black">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <UserPage />
            <Login /> 
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
