import { Link } from "react-router-dom"


function Navbar() {
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
    <div>
   <nav className="py-3 px-4 w-full  max-w-7xl mx-auto flex bg-primary rounded-full fixed justify-between items-center ">
    <div className="flex space-x-1.5 items-center">
        <img src="./images/logo.jpg" className="w-8 h-8"  />
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

   {/* Mobile Nav */}
  {/* Bars Icon */}
  
   <div className="w-full hidden  bg-white/60 pb-4 backdrop-blur-md">
   <div className="flex flex-col gap-4">
    {links.map((y)=>{
        return (
            <Link to={y.link} key={y.id}>
            {y.name}
            </Link>
        )
    })}
   </div>
   </div>
    </nav>
   </div>
  )
}

export default Navbar