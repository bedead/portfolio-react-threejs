import About from "./About";
import Experience from "./Experience";
import NewHero from "./NewHero";
import TechSkills from "./TechSkills";
import Resume from "./Resume";
import Projects from "./Projects";
import MyBlogs from './MyBlogs'
import NewContact from "./NewContact";
import NavBar from './NavBar';


export default function Home() {
    return (
        <div >
            <NavBar />
            <NewHero />
            <About />
            <Experience />
            <TechSkills />
            <Resume />
            <Projects />
            <MyBlogs />
            <NewContact />
        </div>
    )
}