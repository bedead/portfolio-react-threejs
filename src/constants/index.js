import web from '../assets/general/web.webp'
import mobile from '../assets/general/mobile.webp'
import creator from '../assets/general/creator.webp'

const navLinks = [
    {
        id: "Home",
        title: "Home",
        type: "route"
    },
    {
        id: "Blogs",
        title: "Blogs",
        type: "route"
    },
    {
        id: "Contacts",
        title: "Contact",
        type: "route"
    },
    {
        id: "ContactSection",
        title: "Know more",
        type: "route"
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