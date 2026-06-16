import { useActionState } from "react"
import { getDataFromForm } from "./Actions/User.action"


function ActionStateEx() {
   const [data,func]= useActionState(getDataFromForm, {
        message:'',
        success:false,
    })
  return (
    <div className="w-full flex flex-col ">
        <div className="w-ful min:h-screen flex justify-center items-center">
            <form action={func} className="w-7/12 border p-8 rounded-md flex flex-col gap-4 ">
                <input name="myName" className="py-2 w-full rounded-md border focus:outline-0"  type="text" placeholder="Enter your name" />
                <input name="email" className="py-2 w-full rounded-md border focus:outline-0" type="email" placeholder="Enter your email" />
                <button className="py-2 w-full rounded-md border bg-linear-60 from-blue-700 to-purple-800 via-blue-500 via-purple-600 text-stone-100 via-blue-800 via-blue-900" type="submit">Submit</button>
            </form>
        </div>
        {data.success &&(
            <div>
                <h1 className="text-center text-5xl font-bold bg-linear-60 from-blue-700 to-purple-800 via-blue-500 via-purple-600 bg-clip-text via-blue-900 text-transparent ">{data.message}</h1>
            </div>
        )

        }
    </div>
  )
}

export default ActionStateEx