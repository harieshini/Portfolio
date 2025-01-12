export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "PORTFOLIO",
    description:
      "This portfolio website is built dynamically with Next.js,featuring to highlight my technical expertise including projects , skills providing a visually interactive website.",
    technologies: ["TypeScript", "Tailwind CSS", "Next.Js"],
    github: "https://github.com/harieshini/Portfolio",
    
    image: require(".//../../public/projects/odunsi.png"),
    available: true,
  },
  {
    id: 1,
    name: "SEAMSTYLERS",
    description:
      "This is an e-tailoring website to serve as a platform for customers to fully customise their own clothes and choose tailors manually. ",
    technologies: ["MongoDB", "Express", "React","Node"],
    github: "https://github.com/harieshini/SeamStylers",
    
    image: require(".//../../public/projects/seam.png"),
    available: true,
  },
  {
    id: 2,
    name: "E-WASTE",
    description:
      "Built the E-waste management system to manage the collection, recycling, and disposal of electronic waste. This system helps to reduce the environmental impact of electronic waste and promote sustainable practices. ",
    technologies: ["SQL", "PHP", "JAVASCRIPT"],
    github: "https://github.com/harieshini/E-Waste",
    
    image: require(".//../../public/projects/synthetix-flip.png"),
    available: true,
  },
  {
    id: 3,
    name: "PY GAMES",
    description:
      "A bunch of mini games built using multiple libraries in Python , mostly including ergonomic games like typing test , adlibs etc.",
    technologies: ["Python"],
    github: "https://github.com/harieshini/Py-games",
    
    image: require(".//../../public/projects/propellent-new.png"),
    available: true,
  },
  // {
  //   id: 4,
  //   name: "SERVYOU",
  //   description:
  //     "This website provides a platform for employees in an organizaton to cater their food services withing their cafeteria to avoid congesion at peak hours.",
  //   technologies: ["PHP", "JAVASCRIPT", "HTML", "CSS"],
  //   github: "https://github.com/victorcodess/flixify",
    
  //   image: require(".//../../public/projects/flixify.png"),
  //   available: true,
  // },
 
];

