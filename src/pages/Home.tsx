
import Hero from "../components/shared/home/Hero"
import Navbar from "../components/shared/home/Navbar"

function Home() {
  return (
    <div className="min-h-screen font-serif py-4 w-full"> 
    
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default Home