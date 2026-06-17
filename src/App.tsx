import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Assistant from "./pages/Assistant"


function App() {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/ai-assistant" element={<Assistant/>}/>
     </Routes>
    </div>
  )
}

export default App