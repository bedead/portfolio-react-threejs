import web from '../assets/general/web.webp'
import mobile from '../assets/general/mobile.webp'
import creator from '../assets/general/creator.webp'

const navLinks = [
    {
        id: "HeroSection",
        title: "Home",
        type: "route"
    },
    {
        id: "AboutSection",
        title: "About",
        type: "route"
    },
    {
        id: "ExperienceSection",
        title: "Experience",
        type: "route"
    },
    {
        id: "TechSkillsSection",
        title: "Skills",
        type: "route"
    },
    {
        id: "ResumeSection",
        title: "Resume",
        type: "route"
    },
    {
        id: "ProjectsSection",
        title: "Projects",
        type: "route"
    },
    {
        id: "BlogsSections",
        title: "Blogs",
        type: "route"
    },
    {
        id: "ContactSection",
        title: "Contact",
        type: "route"
    },
    {
        id: "freetools",
        title: "Free Tools",
        type: "tools"
    },
];

const toolLinks = [
    {
        id: "DownloadTube",
        title: "DownloadTube (Youtube Downloader)",
        type: "video",
        url: "https://downloadtube-iota.vercel.app/"
    },
    // {
    //     id: "imageupscaler",
    //     title: "Image Upscaler",
    //     type: "tools"
    // },
    // {
    //     id: "imageupscaler",
    //     title: "Image Upscaler",
    //     type: "tools"
    // },
];

const services = [
    {
        title: "Full Stack Web Development",
        icon: web,
    },
    {
        title: "Designing",
        icon: creator,
    },
    {
        title: "ML and DL Learner",
        icon: mobile,
    },
];



export { navLinks, toolLinks, services };