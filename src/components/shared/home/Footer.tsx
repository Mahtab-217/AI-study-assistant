import { Camera, Moon, Phone, PhoneCall } from "lucide-react"


function Footer() {
  return (
    <div className="px-4 flex flex-col w-full h-60 border-t  border-gray-500/50 bg-white">
        <div  className="w-full flex justify-center gap-3 items-center h-fit">
        <div className="bg-green-800/20 border  flex flex-row mt-8 justify-between w-2/12 py-2 px-4 rounded-full border-green-900/40 ">
        <h1 className="text-green-950 font-inter">English</h1>
        <h1 className="text-green-950 font-inter">Pashto</h1>
        <h1 className="text-green-950 font-inter">Farsi</h1>

        </div>
        <div className="flex bg-green-800/20 gap-2 border justify-between mt-8  py-2 px-4 rounded-full border-green-900/40">
          <Moon size={18} className="text-green-950 text-center"/>
          <span className="text-green-950 font-inter text-center">Dark</span>
        </div>
        </div>
        {/* icons for sicial media */}
        <div className="flex w-full gap-3 h-fit  items-center justify-between mx-auto">
          <div className=" flex items-center gap-3 w-full  ">
            <div className=" text-gray-600 border border-gray-300 bg-white py-3 rounded-sm px-3">
           <Phone size={18} className=""/>
           </div>
            <div className="  text-gray-600 border border-gray-300 bg-white py-3 rounded-sm px-3">
           <PhoneCall size={18} className=""/>
           </div>
            <div className="  text-gray-600 border border-gray-300 bg-white py-3 rounded-sm px-3">
           <Camera size={18} className=""/>
           </div>
          </div>
        </div>
    </div>
  )
}

export default Footer