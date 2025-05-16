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
    summary: `I write code for a living, and sometimes for fun (don’t worry, I touch grass too).
I’ve worked on everything from carpooling apps and digital photo books to fitness platforms, basically, if it has users and a loading spinner, I\’ve probably tried to speed it up.
I care about building things that work well, feel smooth, and don’t make the user want to throw their phone. I like clean code, well-timed features, and the kind of UI that feels like it has good dialogue.
Somewhere between shipping features and fixing bugs at 2am, I developed an appreciation for the craft, not just of software, but storytelling too.
There’s something satisfying about getting the timing, the pacing, and the flow just right, whether it’s in code or elsewhere.`,
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
    icon: Instagram,
    name: 'Instagram',
    url: 'https://instagram.com/akshat_1879',
  },
],
experiences: [
  {
    title: "Software Engineer",
    company: "ProductStudio-Kindtech",
    period: "Aug 2023 - May 2025",
    description: "Led mobile app development across multiple products (POOLit, SimplePrints, Scoach), focusing on React Native upgrades, performance optimization, state management, and feature implementation.",
    highlights: ["React Native", "Redux Toolkit", "NodeJS", "Express", "Swift", "Objective-C", "Firebase"]
  },
  {
    title: "Machine Learning Intern",
    company: "Quantiphi Analytics",
    period: "Jan 2023 - Jul 2023",
    description: "Built a text-to-image search engine using deep learning techniques, achieving strong retrieval performance across a large image dataset.",
    highlights: ["ResNet-50", "Cosine Similarity", "Image Processing", "Data Pipelines"]
  }
],
aboutYouImages : [
  require('./Assets/images/personalPhoto5.jpeg'),

]
}

export default Constants