// import About from "./About";
import ExperienceMinimal from "./ExperienceMinimal";
// import NewHero from "./NewHero";
import NewHeroMinimal from "./NewHeroMinimal";
// import TechSkills from "./TechSkills";
// import Resume from "./Resume";
// import Projects from "./Projects";
import BlogsMinimal from './BlogsMinimal'
import ContactMinimal from "./ContactMinimal";
import NavBarMinimal from './NavBarMinimal';


export default function Home() {
    return (
        <div >
            <NavBarMinimal />
            <NewHeroMinimal />
            {/* <NewHero /> */}
            {/* <About /> */}
            <ExperienceMinimal />
            {/* <TechSkills /> */}
            {/* <Resume /> */}
            {/* <Projects /> */}
            <BlogsMinimal />
            <ContactMinimal />
        </div>
    )
}