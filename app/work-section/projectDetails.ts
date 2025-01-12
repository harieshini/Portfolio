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
      "This portfolio website is built dynamically with Next.js, highlighting my technical expertise and providing a visually interactive website.",
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
    
    image: require(".//../../public/projects/s.png"),
    available: true,
  },
  {
    id: 2,
    name: "E-WASTE",
    description:
      "This system manages the collection, recycling, and disposal of electronic wastes,reducing the environmental impacts by them.",
    technologies: ["SQL", "PHP", "JAVASCRIPT"],
    github: "https://github.com/harieshini/E-Waste",
    
    image: require(".//../../public/projects/e.png"),
    available: true,
  },
  {
    id: 3,
    name: "PY GAMES",
    description:
      "A bunch of mini games built using multiple libraries in Python , mostly including ergonomic games like typing test , adlibs etc.",
    technologies: ["Python"],
    github: "https://github.com/harieshini/Py-games",
    
    image: require(".//../../public/projects/g.png"),
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

