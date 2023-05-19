import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import loadingAnim from './assets/anim-bg.gif'

const Navbar = lazy(() => import("./components/NavBar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Works = lazy(() => import("./components/Works"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Contact = lazy(() => import("./components/Contact"));


const renderLoader = () => {
	return (
		<div className="h-screen flex justify-center items-center">
			<img className="w-[150px] h-[117px] " src={loadingAnim} />
		</div>
	)
}

function App() {
	return (
		<BrowserRouter>
			<Suspense fallback={renderLoader()}>
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
			</Suspense>
		</BrowserRouter>
	)
}

export default App
