 import portfolio from "../assets/projects/portfolio.jpg"
import youtube from "../assets/projects/youtube.jpg"
import netflix from "../assets/projects/netflix.jpg"
import foodcart from "../assets/projects/foodcart.png"
import coffee from "../assets/projects/coffee.png"
import chatapp from "../assets/projects/chatapp.avif"
import todo from "../assets/projects/todo.jpg"
import swiggy from "../assets/projects/swiggy.webp"
import music from "../assets/projects/music.webp"
import amazon from "../assets/projects/amazon.jpg"
import fetch from "../assets/projects/fetch.jpg"
import quiz from "../assets/projects/quiz.avif"
import qr from "../assets/projects/qr.webp"











export const projects = [
  {
    id: 1,
    title: "Food Cart || Food Order Application",
    image: foodcart, // Replace with the actual image variable
    description:
      "A full-stack food ordering platform that simplifies online ordering. Users can browse menus, add items to their cart, and pay seamlessly, while admins manage orders and menus effortlessly.",
    techStack: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Axios",
      "Firebase",
      "CSS",
    ],
    github: "https://github.com/yourrepo/foodcart", // Replace with actual repo link
    website: "https://food-cartss.web.app/",
  },
  {
    id: 2,
    title: "NetflixGpt",
    image: netflix, // Replace with the actual image variable
    description:
      "A React application that leverages OpenAI's GPT to provide personalized movie recommendations. It includes AI-powered search, traditional movie search, and Firebase authentication.",
    techStack: ["React", "Redux", "Firebase", "OpenAI", "Tailwind CSS"],
    github: "https://github.com/anandhunv/netflix_gpt", // Replace with actual repo link
    website: "https://www.linkedin.com/posts/anandhu-nv_react-redux-firebase-activity-7196428659497357312-m07H?utm_source=share&utm_medium=member_desktop&rcm=ACoAADf6NiABn-gDiolRXLv06wdtViOKAqypHqA", // Replace with actual live site link
  },
  {
    id: 3,
    title: "YouTube-like Video Streaming App",
    image:youtube, // Base64 or an image URL
    description: "A YouTube-like video streaming app with features like video playback, live chat, comments, and search. Built using React.js, Redux, and the YouTube Data API.",
    techStack: ["React", "Redux", "Tailwind CSS", "YouTube Data API"],
    github: "https://github.com/anandhunv/YouTube-like-App",
    website: "https://utobrutus.netlify.app/", // If deployed
  },
  
  {
    id: 4,
    title: "Portfolio Website",
    image: "https://static.vecteezy.com/system/resources/previews/025/746/864/non_2x/portfolio-button-speech-bubble-banner-label-portfolio-vector.jpg",
    description: "A personal portfolio built with HTML, CSS, and JavaScript.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yourrepo/portfolio",
    website: "https://portfolio.com",
  },
  {
    id: 5,
    title: "Mobile App UX/UI - Coffee APP",
    image: coffee, // Replace with the actual image variable
    description:
      "A sleek and modern mobile app for ordering coffee, designed with a focus on an intuitive user experience. Features a clean design, product selection page, and a polished onboarding screen for seamless user interaction.",
    techStack: ["Figma"],
    website: "https://your-coffee-app-design-link.com", // Replace with actual Figma or live project link
  },
  {
    id: 6,
    title: "QUICKTALK - Real-Time Chat App",
    image: chatapp, // Replace with the actual image variable
    description:
      "A real-time chat application using Socket.io for WebSocket communication and Express.js for the backend. Users can send instant messages, see the number of connected clients, and receive typing feedback.",
    techStack: [
      "WebSocket",
      "Socket.io",
      "Express.js",
      "Node.js",
      "HTML5",
      "CSS",
    ],
    github: "https://github.com/yourrepo/quicktalk", // Replace with actual repo link
    website: "https://your-quicktalk-app-link.com", // Replace with actual live site link
  },
  {
    id: 7,
    title: "To-Do App",
    image: todo, // Replace with the actual image variable
    description:
      "A feature-rich To-Do List application built with React and TypeScript, offering task management with a minimal and interactive UI.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    github: "https://github.com/yourrepo/todo-app", // Replace with actual repo link
    website: "https://your-todo-app-link.com", // Replace with actual live site link
  },
  {
    id: 8,
    title: "Swiggy-Like Food Order App",
    image: swiggy, // Replace with the actual image variable
    description:
      "Developed a Swiggy-like food order app using React and Swiggy API, enabling users to search for restaurants by name, browse menus, add items to the cart, and manage cart items. Implemented seamless navigation and intuitive user interactions for an enhanced ordering experience.",
    techStack: ["JavaScript", "React.js", "Swiggy API", "Tailwind CSS"],
    github: "https://github.com/anandhunv/Swiggy-React-Food-Order-App", // Replace with actual repo link
    website: "https://swiggy-reacts.netlify.app/",
  },
  {
    id: 9,
    title: "Music Player",
    image: music,
    description:
      "A simple yet interactive music player built using JavaScript, HTML, and CSS. Features play, pause, and skip functionalities with an elegant UI design.",
    techStack: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/anandhunv/music_player",
    website: "https://music-player-ruby-tau.vercel.app/",
  },
  
  {
    id: 10,
    title: "Amazon Clone",
    image: amazon,
    description:
      "A web page replicating the look and feel of the Amazon website. Includes various sections such as a navigation bar, slider, product listings, and footer, all styled to resemble the Amazon layout.",
    techStack: ["JavaScript", "CSS", "HTML", "Responsive Design"],
    github: "https://github.com/anandhunv/amazone_clone",
    website: "https://amazone-clone-05.vercel.app/",
  },
  {
    id: 11,
    title: "User Details Fetcher",
    image: fetch,
    description:
      "This project fetches user details from the JSONPlaceholder API and displays them in a table. Users can search and sort the data based on different criteria such as name, city, etc.",
    techStack: ["JavaScript", "JSON", "Fetch API", "HTML", "CSS"],
    github: "https://github.com/anandhunv/fetech_api_js_project",
    website: "https://anandhunv.github.io/fetech_api_js_project/",
  },
  {
    id: 12,
    title: "Quiz App",
    image: quiz,
    description:
      "A simple quiz application built using HTML, CSS, and JavaScript. It presents a set of multiple-choice questions to the user and allows them to select answers.",
    techStack: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/anandhunv/quiz-app",
    website: "https://anandhunv.github.io/quiz-app/",
  },
  {
    id: 13,
    title: "QR Code Generator",
    image: qr,
    description:
      "This repository contains the code for a web page that allows users to generate QR codes for the provided text or URL. Users can enter their desired text or URL, click the 'Generate QR Code' button, and view the generated QR code.",
    techStack: ["JavaScript", "CSS", "HTML", "QR Code", "QR Generator", "Basic JavaScript"],
    github: "https://github.com/anandhunv/qr_code_generator",
    website: "https://anandhunv.github.io/qr_code_generator/",
  },
];
