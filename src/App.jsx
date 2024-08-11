import Home from "./components/Home";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import TechSkills from "./components/TechSkills";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import MyBlogs from './components/MyBlogs'

function App() {
    return (
        <div className="bg-gradient-to-b from-white to-primary">
            <NavBar />
            <Home />
            <TechSkills />
            <Resume />
            <Projects />
            <MyBlogs />
            {/* <Certificates /> */}
            <Contact />
        </div>
    )
}


export default App
