// components/SkillsCarousel.tsx
import SkillCard from "./SongCard";
import { skillsData } from "../utils/skills";
import { skillsImage } from "../utils/skill-image";
import "../animations/animate.css";

const SkillsCarousel = () => {
  return (
    
    <div className="animate absolute bottom-5 flex w-[1100%] sm:w-[680%] md:w-[710%] lg:w-[600%] xl:w-[400%]">
      
      <div className="mx-auto flex w-[50%] justify-around gap-1 lg:my-[1px]">
        {skillsData.map((skill, index) => (
          <SkillCard
            key={index}
            name={skill}
            image={skillsImage(skill)?.src}
          />
        ))}
      </div>
      <div className="mx-auto flex w-[50%] justify-around gap-1 lg:my-[1px]">
        {skillsData.map((skill, index) => (
          <SkillCard
            key={index}
            name={skill}
            image={skillsImage(skill)?.src}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsCarousel;
