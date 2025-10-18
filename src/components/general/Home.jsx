import NewHeroMinimal from "./NewHeroMinimal";
import BlogsMinimal from './BlogsMinimal'
import ContactMinimal from "./ContactMinimal";
import NavBarMinimal from './NavBarMinimal';


export default function Home() {
    return (
        <div >
            <NavBarMinimal />
            <NewHeroMinimal />
            <BlogsMinimal />
            <ContactMinimal />
        </div>
    )
}