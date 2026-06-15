

function Hero() {
  return (
    <div className="mx-w-6xl bg-brand w-full grid min-h-screen h-screen">
      <div className="max-w-7xl mx-auto grid  md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="lg:col-span-2  ">
          <div className="flex flex-col items-center h-screen  justify-end ">
            <h1 className="font-bold text-9xl">Build your website in 2 minutes</h1>
            <span  className="font-bold text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio eum itaque quidem enim, aliquam placeat omnis nesciunt laborum deleniti saepe est neque voluptate, mollitia sapiente rem dolor facere natus possimus?</span>
            <div className="justify-between flex ">
              <input type="text" />
            </div>
          </div>
        </div>
        {/* cards in cards */}
        <div className="lg:col-span-1 bg-brand  flex flex-col justify-center items-center h-screen w-full">
          <div className="bg-white h-fit w-11/12 p-4 relative">
          <div className="w-full h-56 bg-green-950 ">
            <div className="flex p-4  justify-between items-center">
              <img src="public/images/logo.png" className="w-8 h-8" alt="" />
              <p className="bg-green-900/50  rounded-full px-2 text-center items-center justify-center text-xs text-gray-200">your website</p>
               </div>
               <p className="font-bold text-2xl px-4 text-gray-200">Your brand</p>
               <span className="text-gray-300 text-xs px-4">qaa.af/yourname</span>

               <div className="flex justify-between   items-center p-2 ">
                <div className="bg-white w-11/12 items-center flex justify-between  p-2  mx-auto h-fit">
                <p>Book on whatsApp</p>
                <p>/</p>
                </div>
               </div>
               <div className="flex justify-between  w-full h-fit  items-center p-2 ">
                <div className="bg-white w-11/12 items-center flex justify-between  p-2  mx-auto h-fit">
                <p>Book on whatsApp</p>
                <p>/</p>
                </div>
               </div>
               <div className="flex justify-between   items-center p-2 ">
                <div className="bg-white w-11/12 items-center flex justify-between  p-2  mx-auto h-fit">
                <p>Book on whatsApp</p>
                <p>/</p>
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