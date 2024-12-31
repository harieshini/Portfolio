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
    
    image: require(".//../../public/projects/interlock.png"),
    available: true,
  },
  {
    id: 2,
    name: "E-WASTE",
    description:
      "Built the E-waste management system to manage the collection, recycling, and disposal of electronic waste. This system helps to reduce the environmental impact of electronic waste and promote sustainable practices. ",
    technologies: ["SQL", "PHP", "JAVASCRIPT"],
    github: "https://github.com/victorcodess/synthetix",
    
    image: require(".//../../public/projects/synthetix-flip.png"),
    available: true,
  },
  {
    id: 3,
    name: "BAR CODE",
    description:
      "A website built for automatically recording daily attendance of students using their student ID barcode.",
    technologies: ["MongoDB", "Express", "React","Node"],
    github: "https://github.com/harieshini/barcode-attendence-system",
    
    image: require(".//../../public/projects/propellent-new.png"),
    available: true,
  },
  {
    id: 4,
    name: "Flixify",
    description:
      "Flixify lets you seamlessly explore movies and TV series, add bookmarks, and search across all pages. It offers user authentication along with a theme switch.",
    technologies: ["Next.js", "Typescript", "Prisma"],
    github: "https://github.com/victorcodess/flixify",
    
    image: require(".//../../public/projects/flixify.png"),
    available: true,
  },
 
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
