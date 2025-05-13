import { Github, Linkedin, Twitter, Instagram, Phone } from 'lucide-react';


const Constants = {
    name:"Akshat Singh Rathore",
    firstName:"Akshat",
    email: "getakshatrathore@gmail.com",
    phone:"+91-7974868606",
    linkedIn: "",
    github:"https://github.com/karthaze",
    resume:"https://drive.google.com/drive/folders/1OP8W07TLJTWFMwc9jYM_6Qqe_oSvaQh-?usp=sharing",
    gonzoIndia:{
        name:"GonzoIndia",
        link:"https://gonzoindia.vercel.app/",
        description:"",
    },
    conway:{
        name:"Conway's Game of Life",
        link:"https://conways-game-ten.vercel.app/",
        description:""
    },
    location:{
        BANGALORE:"Bangalore",
        PUNE:"Pune",
        MUMBAI: "Mumbai",
        NOIDA:"Noida",
        GURGAON:"GURGAON"
    },
    availability:"Immediate",
    projects: [
    {
      title: "GonzoIndia",
      description:
        "A full-stack platform for Gonzo journalism with image and Spotify embed support, OAuth login, filters, and real-time updates.",
      technologies: ["ReactJS", "NodeJS", "Express", "MongoDB", "Firebase", "Spotify API", "Google OAuth 2.0", "Socket.IO"],
      image: require("./Assets/images/gonzoIndiaPreview.png"),
      links: {
        github: "https://github.com/karthaze/gonzoindia",
        live: "https://gonzoindia.vercel.app/",
      },
      category: "Full Stack",
    },
    {
      title: "Conway's Game of Life",
      description:
        "A performant grid visualizer for Conway's Game of Life with dynamic cell behavior and support for large grids.",
      technologies: ["ReactJS", "JavaScript"],
      image: require("./Assets/images/conwayGameOfLifePreview.png"),
      links: {
        github: "https://github.com/karthaze/ConwaysGame",
        live: "https://conways-game-ten.vercel.app/",
      },
      category: "Frontend",
    },
  ],
      summary: `Software Engineer by profession, storyteller by temperament.
Graduated with a B.Tech and immediately dove headfirst into building real-world apps, where bugs are sneaky little villains and every feature request sounds like a side quest from a video game.
I've worked on apps that help you find carpool buddies, design photo books, and even track your squats, so yeah, if it has users and a loading spinner, I've probably tried to optimize it.
I like my code clean, my deadlines tight, and my UI slightly dramatic.
Also, I watch way too many movies and occasionally talk about commits like they\’re plot twists. Navigate to contacts if you want things done — and narrated like a Tarantino voiceover.`,

    skills: {
    programming: ["JavaScript", "TypeScript", "Python", "Java", "SQL", "Swift", "C++", "Objective-C"],
    frontend: ["ReactJS", "React Native", "Redux Toolkit", "Tailwind CSS", "HTML5", "CSS3", "SwiftUI", "UIKit", "MVVM"],
    backend: ["Node.js", "Express", "RESTful APIs", "Firebase", "MongoDB", "AWS", "Stripe", "Docker", "CI/CD"],
    tools: ["Git", "VS Code", "Xcode", "Postman", "Jest", "Agile", "Data Structures", "OOP"],
    machineLearning: ["TensorFlow", "PyTorch", "Keras", "Matplotlib", "Seaborn", "Plotly", "Feature Engineering"],
  },
  socialLinks: [
  {
    icon: Github,
    name: 'GitHub',
    url: 'https://github.com/karthaze',
  },
  {
    icon: Linkedin,
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/akshat1879',
  },
  {
    icon: Twitter,
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
  },
  {
    icon: Instagram,
    name: 'Instagram',
    url: 'https://instagram.com/yourusername',
  },
],
}

export default Constants