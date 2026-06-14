
import Hero from "../components/shared/home/Hero"
import MainSextion from "../components/shared/home/MainSextion"
import Navbar from "../components/shared/home/Navbar"

function Home() {
  return (
    <div className=" font-serif "> 
    
        <Navbar/>
        <Hero/>
        <MainSextion/>
    </div>
  )
}

export default Home