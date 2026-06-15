import { ArrowUpRight, Smartphone } from "lucide-react"
import { Link } from "react-router-dom"


function Section() {
  return (
    <div className="w-full bg-primary/70 pt-6 px-4">
        <div className="max-w-7xl w- full mx-auto grid lg:grid-cols-3 gap-8 md:grid-cols-2">

            <div  className="lg:col-span-2 flex flex-col gap-4 ">
                <div className="flex space-x-2 items-center text-gray-500 ">
                    <Smartphone size={18}/>
                    <span className="uppercase  text-green-950/75 font-bold">For Afghan influencer</span>
                </div>
                <p className="max-w-3xl font-black text-5xl text-green-950  "> Turn In Followers Into loyal Customers</p>
                <span className="text-green-950 text-xl">  consectetur adipisicing elit. Quae sit obcaecati ipsum repudiandae aliquam modi quis nemo alias. Consequuntur minus repudiandae distinctio dolorum obcaecat</span>
                <div className="grid grid-cols-3 pt-8 w-11/12 gap-3">
                    <div className="h-fit m-4 p-3 rounded-sm   w-full   border bg-white ">
                        <p className="font-bold text-2xl text-green-900 ">What can I make with Qaaaf?</p>
                        <span className="text-sm text-green-900/90">You can make a mobile-friendly qaa.af website with your links, videos, products, services, sponsor offers, and updates.</span>
                         </div>
                    <div className="h-fit m-4 p-3 rounded-sm   w-full   border bg-white ">
                        <p className="font-bold text-2xl text-green-900 ">What can I make with Qaaaf?</p>
                        <span className="text-sm text-green-900/90">You can make a mobile-friendly qaa.af website with your links, videos, products, services, sponsor offers, and updates.</span>
                         </div>
                    <div className="h-fit m-4 p-3 rounded-sm   w-full   border bg-white ">
                        <p className="font-bold text-2xl text-green-900 ">What can I make with Qaaaf?</p>
                        <span className="text-sm text-green-900/90">You can make a mobile-friendly qaa.af website with your links, videos, products, services, sponsor offers, and updates.</span>
                         </div>
                </div>
            </div>
            

            <div  className="lg:col-span-1 flex items-start ">
                <div className="w-full p-4 bg-white">
                    <p className="uppercase mb-4 text-green-950/70 font-bold ">Start With</p>

                    <div className="flex flex-col gap-2">
                    <div className="bg-green-200 hover:-translate-y-1 transition-all duration-400  hover:bg-brand/70 border border-brand/80 rounded-sm p-3  flex justify-between items-center ">
                        <Link to="/" className="font-bold text-green-950">shorten a link</Link>
                        <ArrowUpRight size={18}/>
                    </div>
                    <div className="bg-green-200 hover:-translate-y-1 transition-all duration-400  hover:bg-brand/70 border border-brand/80 rounded-sm p-3  flex justify-between items-center ">
                        <Link to="/"  className="font-bold text-green-950">shorten a link</Link>
                        <ArrowUpRight size={18}/>
                    </div>
                    <div className="bg-green-200 hover:-translate-y-1 transition-all duration-400  hover:bg-brand/70 border border-brand/80 rounded-sm p-3  flex justify-between items-center ">
                        <Link to="/"  className="font-bold text-green-950">shorten a link</Link>
                        <ArrowUpRight size={18}/>
                    </div>
                    <div className="bg-green-200 hover:-translate-y-1 transition-all duration-400  hover:bg-brand/70 border border-brand/80 rounded-sm p-3  flex justify-between items-center ">
                        <Link to="/"  className="font-bold text-green-950">shorten a link</Link>
                        <ArrowUpRight size={18}/>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Section