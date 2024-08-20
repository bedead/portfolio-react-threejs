import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import NewHero from "./NewHero";

export default function Home() {
    return (
        <div >
            {/* <Hero /> */}
            <NewHero />
            <About />
            <Experience />
        </div>
    )
}