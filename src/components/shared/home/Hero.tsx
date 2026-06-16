import { ArrowRight } from "lucide-react"


function Hero() {
  return (
    <div className="mx-w-6xl px-4 bg-brand w-full grid min-h-screen h-screen">
      <div className="max-w-7xl mx-auto grid  md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="lg:col-span-2  ">
          <div className="flex flex-col items-center h-screen gap-8 justify-center pt-8 ">
            <h1 className="font-black text-8xl font-inter text-green-950">Build your website in 2 minutes.</h1>
            <span  className="font-bold text-sm  text-green-900">Lorem ipsum dolor sit amet consectetur, adipisicing eliteat omnis nesciunt laborum deleniti saepe est neque voluptate, mollitia sapiente rem dolor facere natus possimus?</span>
            <div className="justify-between flex gap-3">
              <input type="text"  className="border bg-white py-3 px-12 rounded-full border-green-950/80" placeholder="Qaa.af/yourname"/>
              <div className="flex  py-3 px-8 bg-green-950 items-center  rounded-full ">
              <button className="text-white font-bold">Get started for free</button>
              <ArrowRight className="text-white " size={20} />
              </div>
            </div>
              <p className="text-green-900">Free to start. Choose a short qaa.af username your followers can remember.</p>
          </div>
        </div>
        {/* cards in cards */}
        <div className="lg:col-span-1 bg-brand  flex flex-col justify-center items-center w-full">
          <div className="bg-white w-11/12 p-4 relative">
          <div className="w-full bg-green-950 ">
            <div className="flex p-4  justify-between items-center">
              <img src="public/images/logo.png" className="w-8 h-8" alt="" />
              <p className="bg-green-900/50  rounded-full px-2 text-center items-center justify-center text-xs text-gray-200">your website</p>
               </div>
               <p className="font-bold text-2xl px-4 text-gray-200">Your brand</p>
               <span className="text-gray-300 text-xs px-4">qaa.af/yourname</span>

               <div className="flex justify-between   items-center p-2 ">
                <div className="bg-white w-11/12 items-center flex justify-between  p-2  mx-auto h-fit">
                <p className="font-bold font-inter text-green-950">Book on whatsApp</p>
                <p className="font-bold font-inter text-green-950">/</p>
                </div>
               </div>
               <div className="flex justify-between  w-full h-fit  items-center p-2 ">
                <div className="bg-white w-11/12 items-center flex justify-between  p-2  mx-auto h-fit">
                <p className="font-bold font-inter text-green-950"> Book on whatsApp</p>
                <p className="font-bold font-inter text-green-950">/</p>
                </div>
               </div>
               <div className="flex justify-between   items-center p-2 ">
                <div className="bg-white w-11/12 items-center flex justify-between  p-2  mx-auto h-fit">
                <p className="font-bold font-inter text-green-950">Book on whatsApp</p>
                <p className="font-bold font-inter text-green-950">/</p>
                </div>
               </div>
          </div>
          </div>
        </div>
      </div >
    </div>
    
  )
}

export default Hero