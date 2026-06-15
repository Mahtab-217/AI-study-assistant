import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function Navbar() {
    const [isOpen, setIsOpen]=useState(false);
    useEffect(()=>{
        const handleResize=()=>{
            if(window.innerWidth >500){
                setIsOpen(false)
            }
        }
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        }

    },[])
    const links: {id: number, link: string, name:string}[]= [
        {
        id:1,
        link: "/",
        "name": "Home",
        },
        {
        id:2,
        link: "/ai-assistant",
        "name": "Study Assistant",
        },
        {
        id:3,
        link: "/about",
        "name": "About",
        },
    ]
  return (

    <div className="">
   <nav className={`py-3 px-4 w-full  max-w-7xl mx-auto flex ${isOpen? "bg-primary/60 top-0 rounded-none": "bg-primary top-1.5 rounded-full"} px-4 rounded-full top-1.5 left-1/2 -translate-x-1/2 fixed justify-between items-center `}>
    <div className="flex space-x-1.5 items-center">
        <img src="./images/logo.png" className="w-8 h-8"  />
        <span className="text-md font-inter hidden md:inline">Study Assistant</span>
    </div>


    {/* Desktop Nav */}
   <div className="md:flex hidden justify-center space-x-6 ">
    {links.map((y)=>{
        return (
            <Link to={y.link} key={y.id}>
            {y.name}
            </Link>
        )
    })}
   </div>

  {/* Bars Icon */}
  <div className="md:hidden">
    {isOpen? <X onClick={()=>setIsOpen(!isOpen)} size={24}/>: <Menu onClick={()=>setIsOpen(!isOpen)} size={24}/>}
  </div>

  

    </nav>



 {/* Mobile Nav */}
   <div className={`w-full top-10 fixed transition-all duration-300 left-1/2 -translate-x-1/2 
    min-h-screen ${isOpen? "flex": "hidden"} 
    bg-white/50 pb-4 backdrop-blur-md`}>

   <div className="flex flex-col gap-4 items-center w-full ">
   
    {links.map((y)=>{
        return (
            <Link className="hover:text-blue-600 md:text-sm transition-colors duration-300" to={y.link} key={y.id}>
            {y.name}
            </Link>
        )
    })}
   </div>
   </div>

   </div>
  )
}

export default Navbar