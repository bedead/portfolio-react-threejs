import web from '../assets/web.webp'
import mobile from '../assets/mobile.webp'
import creator from '../assets/creator.webp'

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
        id: "project",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
    {
        id: "coming_soon",
        title: "Coming soon",
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
        title: "ML and DL Learner",
        icon: mobile,
    },
];

import csi from '../assets/experience/csi.webp'
import msc from '../assets/experience/msc.webp'

const experiences = [
    {
        title: "V open source member",
        company_name: "CSI Chapter",
        icon: csi,
        iconBg: "black",
        date: "Augest 2021 - June 2022",
        points: [
            "Conducting regular meetings to discuss open source projects and new initiatives.",
            "Conducting workshops and training sessions to help members learn more about open source technologies.",
            "Coordinating with other teams within the CSI chapter to ensure smooth execution of events."
        ],
    },
    {
        title: "Technical member ",
        company_name: "Microsoft Student Chapter",
        icon: msc,
        iconBg: "black",
        date: "October 2022 - March 2023",
        points: [
            "Maintaining the website and ensuring that it is up-to-date and functioning properly.",
            "Collaborating with other members of the chapter to identify areas for improvement on the website.",
            "Implementing changes and updates to the website using programming languages such as React.js, tailwind and JavaScript.",
            "Debugging any issues or errors that arise on the website and working to resolve them."
        ],
    },

];

import shapeout from '../assets/project/shapeout.webp'
import facedetection from '../assets/project/facedetection.webp'
import hi from '../assets/project/hi.webp'
import langgo from '../assets/project/langgo.webp'
import lifeoverseas from '../assets/project/lifeoverseas.webp'
import velox from '../assets/project/velox.webp'
import yolo from '../assets/project/yolo.webp'
import anon_exchange from '../assets/project/anon_exchange.webp'
import banana_classification from '../assets/project/banana_class.webp'

const projects = [
    {
        name: "Anon Exchange - Anonymous chatting app",
        description:
            "An innovative anonymous chatting app that redefines digital interactions. This project empowers strangers to connect seamlessly, engaging in candid conversations without the constraints of identity. What sets us apart is our commitment to privacy, allowing users to create exclusive private chat rooms for confidential discussions.",
        tags: [
            {
                name: "vitejs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "tailwind CSS",
                color: "pink-text-gradient",
            },
        ],
        image: anon_exchange,
        source_code_link: "https://github.com/bedead/Anon-Exchange-chatting",
        date: 'August 2023'
    },
    {
        name: "Banana disease classification",
        description:
            "Banana disease classification is a project that uses a YOLOv8 deep learning model to detect and identify various diseases affecting banana plants. The project is based on a custom dataset of images of banana leaves with different types of infections. The project aims to provide a fast and accurate diagnosis of banana diseases, which can help farmers and researchers to prevent crop losses and improve banana production.",
        tags: [
            {
                name: "YOLOv8",
                color: "green-text-gradient",
            },
            {
                name: "Colab",
                color: "pink-text-gradient",
            },
        ],
        image: banana_classification,
        source_code_link: "https://colab.research.google.com/drive/1TLumA28dCY-9_lzouIJtt2CsCjONGdNy?usp=sharing",
        date: 'August 2023'
    },
    {
        name: "PATENT - CLASSIFICATION OF LUNG CANCER USING DEEP LEARNING TECHNIQUES.",
        description:
            "Application No - 202341039647 The model is based on a YOLOv8 (Deep learning Neural network architecture) and is trained on the publicly available dataset, which consists of lung CT scans of patients with and without lung cancer.",
        tags: [
            {
                name: "Gradio",
                color: "blue-text-gradient",
            },
            {
                name: "YOLO",
                color: "green-text-gradient",
            },
            {
                name: "Roboflow",
                color: "pink-text-gradient",
            },
        ],
        image: yolo,
        source_code_link: "https://github.com/bedead/lung-cancer-classification-yoloV8---gradio.git",
        date: 'June 2023'
    },
    {
        name: "Face Detection",
        description:
            "'FACE-DETECTOR' is a GitHub repository showcasing an OpenCV project for detecting human faces using a cascade classifier. The project utilizes the OpenCV library, which is a popular computer vision library in Python, to detect human faces in images or video streams.",
        tags: [
            {
                name: "Cascade classifier",
                color: "blue-text-gradient",
            },
            {
                name: "Python",
                color: "green-text-gradient",
            },
            {
                name: "OpenCV",
                color: "pink-text-gradient",
            },
        ],
        image: facedetection,
        source_code_link: "https://github.com/bedead/FACE-DETECTOR.git",
        date: 'Feb 2023'
    },
    {
        name: "Life Overseas",
        description:
            "Life Overseas is a concept website that aims to provide students with valuable resources and information to successfully clear entrance exams for foreign colleges.",
        tags: [
            {
                name: "Flask",
                color: "blue-text-gradient",
            },
            {
                name: "Python",
                color: "green-text-gradient",
            },
        ],
        image: lifeoverseas,
        source_code_link: "https://github.com/bedead/Life-Overseas-webiste.git",
        date: 'Jan 2023'
    },
    {
        name: "Velox Todo",
        description:
            "Velox Todo is a Windows application built using JavaFX and JSON files. It is a task management tool designed to help users organize and prioritize their daily tasks efficiently.",
        tags: [
            {
                name: "Java",
                color: "blue-text-gradient",
            },
            {
                name: "JavaFX",
                color: "green-text-gradient",
            },
            {
                name: "JSON",
                color: "pink-text-gradient",
            },
        ],
        image: velox,
        source_code_link: "https://github.com/bedead/Velox-Todo-Application.git",
        date: 'Sep 2022'
    },
    {
        name: "HI",
        description:
            "'HI' is a console-based conversational app written in Python. It utilizes various libraries such as pyinstaller, pyjokes, PyDictionary, platform, psutil, requests, getpass, pywhatkit, pyttsx3, speechrecognition, Wikipedia, Pyaudio, speedtest-cli, pyautogui, and py-cpuinfo to provide a wide range of functionalities.",
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "JSON",
                color: "green-text-gradient",
            },
        ],
        image: hi,
        source_code_link: "https://github.com/bedead/HI_2021.12.22.4.git",
        date: 'Mar 2022'
    },
    {
        name: "Lang go",
        description:
            "'Lang Go' is a language translation app that is built using the Kivy and KivyMD frameworks in Python. The app utilizes the TextBlob library for translation capabilities. With 'Lang Go', users can input text in one language and translate it to another language seamlessly.",
        tags: [
            {
                name: "Kivy",
                color: "blue-text-gradient",
            },
            {
                name: "Kivymd",
                color: "green-text-gradient",
            },
            {
                name: "textBlob",
                color: "pink-text-gradient",
            },
        ],
        image: langgo,
        source_code_link: "https://github.com/bedead/kivymd-language-translation-app.git",
        date: 'Mar 2022'
    },
    {
        name: "Shape out",
        description:
            "'Shape Out' is a 2D platformer game available on Amazon, created using the Godot game engine. The game features intuitive controls, colorful graphics, and engaging gameplay that requires players to jump, run, and solve puzzles to progress through the levels.",
        tags: [
            {
                name: "Godot engine",
                color: "blue-text-gradient",
            },
            {
                name: "GD-script",
                color: "green-text-gradient",
            },
        ],
        image: shapeout,
        source_code_link: "https://www.amazon.com/Bedead-Shape-Out-2d-platformer/dp/B0999LHBYN",
        date: 'Aug 2021'
    },
];


export { navLinks, services, experiences, projects };