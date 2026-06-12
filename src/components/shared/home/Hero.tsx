

function Hero() {
  return (
    <div className="mx-w-6xl bg-brand w-full grid min-h-screen h-screen">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="lg:col-span-2  ">
          <div className="flex flex-col items-center  justify-end ">
            <h1 className="font-bold text-8xl ">Build your website in 2 minutes</h1>
            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio eum itaque quidem enim, aliquam placeat omnis nesciunt laborum deleniti saepe est neque voluptate, mollitia sapiente rem dolor facere natus possimus?</span>
            <div className="justify-between flex ">
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="lg:col-span-1"></div>
      </div>
    </div>
  )
}

export default Hero