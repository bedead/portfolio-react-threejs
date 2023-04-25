import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, About, Works, Experience, Tech, Contact } from "./components";


function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className=" ">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-10">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
