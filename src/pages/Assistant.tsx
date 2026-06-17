import Footer from "../components/shared/home/Footer"
import Navbar from "../components/shared/home/Navbar"

function Assistant() {
  return (
    <div className="">
        <Navbar/>
    <div className='w-full bg-gray-100 min-h-screen flex justify-center items-center'>
       <div className="w-full shadow-[0px_0px_23px_rgba(0,0,0,0.4)] md:w-6/12 lg:w-5/12 border-green-950 p-8 rounded-md space-y-4  border-2">
        <p className="text-3xl text-center font-bold bg-linear-60 from-green-950 to-green-600    bg-clip-text text-transparent">Welcome to to AI study Assistant</p>
        <span className="text-center text-md bg-linear-60 from-green-950 to-green-600    bg-clip-text text-transparent">Summerize your class notes with AI Assistant</span>
        <form action="" className="flex flex-col w-full space-y-4">
            <textarea placeholder="shorten your study notes... " name="note" className="shadow-[0px_0px_10px_rgba(0,0,0,0.4)]   w-full px-2 rounded-md border focus:outline-0 h-44 resize-none"  id=""></textarea>
            <button className="py-2 bg-green-950 text-white rounded-full" type="submit">Submit</button>
        </form>
       </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Assistant