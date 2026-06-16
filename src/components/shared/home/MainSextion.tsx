import { ChartColumn, Link, ShoppingBag } from "lucide-react"

function MainSextion() {
  return (
    <div className="w-full bg-gray-100 py-8 pt-8 px-4">
        <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-5  gap-8">
            <div className="lg:col-span-2 flex flex-col justify-start space-y-4"> 
                <span className="uppercase text-green-950/75 font-bold ">MADE for creators</span>
                <p className="text-4xl font-black  text-green-950">  quod enimd fuga placeat ut molestias aperiam, corporis dolorem ipsa dicta?</p>
            </div>
            {/* Cards */}
            <div className="grid md:grid-cols-3 lg:col-span-3   gap-8">
                <div className="border border-green-900/30 p-4 ">
                <div className="bg-brand p-3 w-fit">
                    <Link size={24}/>
                    </div>
                    
                    <div className="flex flex-col space-y-4">
                        <p className="text-xl text-green-900 ">All your links</p>
                        <p className="text-sm "> Suscipit accusamus, quos neque at praesentium sequi veniam quasi dolorum ratione ad iure iusto blanditiis expedita autem hic? Ullam, quae! Aut, hic!</p>
                    </div>
                
                </div>
                <div className="border border-green-900/30 p-4 ">
                <div className="bg-brand p-3 w-fit">
                    <ShoppingBag size={24}/>
                     </div>
                    <div className="flex flex-col space-y-4">
                        <p className="text-xl text-green-900 ">All your links</p>
                        <p className="text-sm "> Suscipit accusamus, quos neque at praesentium sequi veniam quasi dolorum ratione ad iure iusto blanditiis expedita autem hic? Ullam, quae! Aut, hic!</p>
                    </div>
               
                </div>
                <div className="border border-green-900/30 p-4 ">
                <div className="bg-brand p-3 w-fit">
                    <ChartColumn size={24}/>
                      </div>
                    <div className="flex flex-col space-y-4">
                        <p className="text-xl text-green-900 ">All your links</p>
                        <p className="text-sm ">Suscipit accusamus, quos neque at praesentium sequi veniam quasi dolorum ratione ad iure iusto blanditiis expedita autem hic? Ullam, quae! Aut, hic!</p>
                    </div>
              
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainSextion