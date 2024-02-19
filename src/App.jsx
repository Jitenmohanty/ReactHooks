import './App.css'
import About from './Components/About'
import LandingPage from './Components/LandingPage'
import Merquer from './Components/Merquer'
import Navbar from './Components/Navbar'
import Eye from './Components/Eye'
import Featured from './Components/Featured'
import Reviews from './Components/Reviews'

function App() {

  return (
    <div className='min-h-full w-full bg-black text-white'>
        <Navbar/>
        <LandingPage/>
        <Merquer/>
        <About/>
        <Eye/>
        <Featured/>
        <Reviews/>
    </div>
  )
}

export default App
