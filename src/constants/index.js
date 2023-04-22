import html from '../assets/tech/html.png'
import css from '../assets/tech/css.png'
import javascript from '../assets/tech/javascript.png'
import reactjs from '../assets/tech/reactjs.png'
import tailwind from '../assets/tech/tailwind.png'
import git from '../assets/tech/git.png'
import bootstrap from '../assets/tech/bootstrap.png'
import c_ from '../assets/tech/c++.png'
import django from '../assets/tech/django.png'
import figma from '../assets/tech/figma.png'
import firebase from '../assets/tech/firebase.png'
import flask from '../assets/tech/flask.png'
import inkscape from '../assets/tech/inkscape.png'
import java from '../assets/tech/java.png'
import mysql from '../assets/tech/mysql.png'
import photoshop from '../assets/tech/photoshop.png'
import python from '../assets/tech/python.png'


import web from '../assets/web.png'
import mobile from '../assets/mobile.png'
import creator from '../assets/creator.png'

const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
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
        title: "Android Development",
        icon: mobile,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "bootstrap",
        icon: bootstrap,
    },
    {
        name: "c++",
        icon: c_,
    },
    {
        name: "django",
        icon: django,
    },
    {
        name: "firebase",
        icon: firebase,
    },
    {
        name: "flask",
        icon: flask,
    },
    {
        name: "inkscape",
        icon: inkscape,
    },
    {
        name: "java",
        icon: java,
    },
    {
        name: "mysql",
        icon: mysql,
    },
    {
        name: "photoshop",
        icon: photoshop,
    },
    {
        name: "python",
        icon: python,
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        // icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },

];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        // image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        // image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        // image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { navLinks, services, technologies, experiences, projects };