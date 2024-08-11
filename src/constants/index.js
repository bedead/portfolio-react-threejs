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

import csi from '../assets/experience/csi.webp'
import msc from '../assets/experience/msc.webp'
// import techyv from '../assets/experience/techyv.webp'
import nettv4u from '../assets/experience/nettv4u.webp'

const experiences = [
    {
        title: "Technical Content Writer",
        company_name: "Nettv4u",
        icon: nettv4u,
        iconBg: "white",
        date: "October 2023 - December 2023 (2 Months)",
        points: [
            'Writing Professional articles related to IT.',
            'Ensuring use of no AI content in articles.',
            'Creating articles on real facts and data.'
        ],
    },
    {
        title: "Technical member",
        company_name: "Microsoft Student Chapter",
        icon: msc,
        iconBg: "black",
        date: "October 2022 - March 2023 (6 Months)",
        points: [
            "Maintaining the website and ensuring that it is up-to-date and functioning properly.",
            "Collaborating with other members of the chapter to identify areas for improvement on the website.",
            "Implementing changes and updates to the website using programming languages such as React.js, tailwind and JavaScript.",
            "Debugging any issues or errors that arise on the website and working to resolve them."
        ],
    },
    {
        title: "V open source member",
        company_name: "CSI Chapter",
        icon: csi,
        iconBg: "white",
        date: "Augest 2021 - June 2022 (11 Months)",
        points: [
            "Conducting regular meetings to discuss open source projects and new initiatives.",
            "Conducting workshops and training sessions to help members learn more about open source technologies.",
            "Coordinating with other teams within the CSI chapter to ensure smooth execution of events."
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
import convogen from '../assets/project/convogen.webp'
import downloadtube from '../assets/project/downloadtube.webp'


const projects = [
    {
        name: "Downloadtube",
        description:
            "DownloadTube offers a fast, free, and easy way to download your favorite YouTube videos and music directly to your device. Enjoy high-quality video and audio downloads with no subscription required. Explore a variety of formats and resolutions to suit all your playback needs. ",
        tags: [
            {
                name: "next.js",
                color: "blue-text-gradient",
            },
            {
                name: "js",
                color: "green-text-gradient",
            },
            {
                name: "Youtube API",
                color: "pink-text-gradient",
            },
        ],
        image: downloadtube,
        source_code_link: {
            "Live": "https://downloadtube-iota.vercel.app/",
            "Github": "https://downloadtube-iota.vercel.app/"
        },
        date: 'February 2024',
    },
    {
        name: "ConvoGen AI",
        description:
            "'ConvoGen' is the virtual embodiment of me, a chatbot that offers lifelike insights and information about my experiences, interests, and personality. Engage in conversations that feel as real as speaking with me in person, as 'ConvoGen' shares a wealth of personal details and knowledge, creating a truly immersive and authentic chatbot experience.",
        tags: [
            {
                name: "T5 model",
                color: "blue-text-gradient",
            },
            {
                name: "Transformer",
                color: "green-text-gradient",
            },
            {
                name: "Colab",
                color: "pink-text-gradient",
            },
        ],
        image: convogen,
        source_code_link: {
            "Colab": "https://colab.research.google.com/drive/1a6LATySYKaS8qqfk_4maSaV4guvTRA-8?usp=sharing",
        },
        date: 'October 2023',
    },
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
        source_code_link: {
            "Live": "https://anon-exchange-lyart.vercel.app/",
            "Github": "https://github.com/bedead/Anon-Exchange-chatting",
        },
        date: 'August 2023',
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
        source_code_link: {
            "Colab": "https://colab.research.google.com/drive/1TLumA28dCY-9_lzouIJtt2CsCjONGdNy?usp=sharing",
        },
        date: 'August 2023',
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
        source_code_link: {
            "Huggingface": "https://huggingface.co/spaces/bedead/Lung-cancer-classification",
            "Github": "https://github.com/bedead/lung-cancer-classification-yoloV8---gradio.git",
        },
        date: 'June 2023',
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
        source_code_link: {
            "Github": "https://github.com/bedead/FACE-DETECTOR.git",
        },
        date: 'Feb 2023',
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
        source_code_link: {
            "Live": "https://full-dashing-age.glitch.me/",
            'Github': "https://github.com/bedead/Life-Overseas-webiste.git",
        },
        date: 'Jan 2023',
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
        source_code_link: {
            "Github": "https://github.com/bedead/Velox-Todo-Application.git",
        },
        date: 'Sep 2022',
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
        source_code_link: {
            "Github": "https://github.com/bedead/HI_2021.12.22.4.git",
        },
        date: 'Mar 2022',
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
        source_code_link: {
            "Github": "https://github.com/bedead/kivymd-language-translation-app.git",
        },
        date: 'Mar 2022',
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
        source_code_link: {
            "Appstore": "https://www.amazon.com/Bedead-Shape-Out-2d-platformer/dp/B0999LHBYN",
        },
        date: 'Aug 2021',
    },
];


const blogs = [
    {
        name: "React router deployment to gh-pages (issue fixed)",
        date: "Jan 8, 2024",
        img: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*KBr7PR6pMmxKnoOn",
        link: "https://medium.com/@Satyam_Mishra/react-router-deployment-to-gh-pages-issue-fixed-2024-bc7fd80946ad"
    },
    {
        name: "Vite website file not updating without restarting the development server.",
        date: "Oct 15, 2023",
        img: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*tvWtuvWK1j4r4c1V",
        link: "https://medium.com/@Satyam_Mishra/vite-website-file-not-updating-without-restarting-the-development-server-68a7a252186b"
    },
    {
        name: "Deploy your vite (react) app to GitHub pages",
        date: "Oct 5, 2023",
        img: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*Ndj_GnufQCzvRyT6454_-Q.png",
        link: "https://medium.com/@Satyam_Mishra/deploy-your-vite-react-app-to-github-pages-a6342dda470a"
    },
    {
        name: "Two of the best free resources for continuous learning",
        date: "May 6, 2023",
        img: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*E8m74KMwm304e_mdPI9g6Q.png",
        link: "https://medium.com/@Satyam_Mishra/two-of-the-best-free-resources-for-continuous-learning-665fdf52be9b"
    },
    {
        name: "How to set up Vite (react.js) application to have multiple endpoints",
        date: "Jan 20, 2023",
        img: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*BnZlZbw6_YmuZ_00h9TNrg.png",
        link: "https://medium.com/@Satyam_Mishra/how-to-set-up-vite-react-js-application-to-have-multiple-endpoints-a27a388cbbc3"
    },
    {
        name: "Structuring Flask application for multiple apps",
        date: "Dec 22, 2022",
        img: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*qNHflWY5VgqfzO35htz8Yw.png",
        link: "https://medium.com/@Satyam_Mishra/structuring-flask-application-for-multiple-apps-part-2-79eefca094de"
    },
    {
        name: "MUST HAVE DEVELOPER / PROGRAMMERS GEARS.",
        date: "Dec 17, 2022",
        img: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*tx9sts6K-tG2myM-OA69vg.png",
        link: "https://medium.com/@Satyam_Mishra/must-have-developer-programmers-gears-3fd5f805186"
    },
    {
        name: "Learn the basics of Python",
        date: "Aug 3, 2022",
        img: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*G9WB3cWh6SmHFA_2",
        link: "https://medium.com/@Satyam_Mishra/learn-basics-of-python-part-1-9919303c1b3a"
    },
    {
        name: "Create your first Flask application",
        date: "Jul 29, 2022",
        img: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*2fA099YHqxNlcxWOK9hMoA.png",
        link: "https://medium.com/@Satyam_Mishra/create-your-first-flask-application-48a698b524ca"
    },
    {
        name: "Java vs Python (The Ultimate Programming Language)",
        date: "Jul 22, 2022",
        img: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*Y_ycyItZ76XNpY9TM76JMg.jpeg",
        link: "https://medium.com/@Satyam_Mishra/java-vs-python-the-ultimate-programming-language-8c00a5b49cc"
    },
    {
        name: "Getting started with JavaFx in vscode (Beginner way)",
        date: "Jul 17, 2022",
        img: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*4PYrphm6D1qQ5GfRGLJllw.jpeg",
        link: "https://medium.com/@Satyam_Mishra/getting-started-with-javafx-in-vscode-beginner-way-9fed580fd4f"
    },
    {
        name: "A Simple guide to script your first movable car in Godot engine.",
        date: "Jan 10, 2022",
        img: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*S4dHJNkanZ_ZQ4-w8fT1nQ.png",
        link: "https://medium.com/@Satyam_Mishra/a-simple-guide-to-script-your-first-movable-car-in-godot-engine-93177db71472"
    },
]

export { navLinks, toolLinks, services, experiences, projects, blogs };