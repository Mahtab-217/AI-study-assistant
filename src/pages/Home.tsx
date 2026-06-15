
import Hero from "../components/shared/home/Hero"
import MainSextion from "../components/shared/home/MainSextion"
import Navbar from "../components/shared/home/Navbar"
import Section from "../components/shared/home/Section"

function Home() {
  return (
    <div className=" font-serif "> 
    
        <Navbar/>
        <Hero/>
        <MainSextion/>
        <Section/>
    </div>
  )
}

export default Home