// components/SkillCard.tsx
import Image from "next/image";

interface SkillCardProps {
  name: string;
  image: string;
}

const SkillCard = ({ name, image }: SkillCardProps) => {
  return (
    <div className="relative flex h-[138px] w-[195px] items-center justify-center overflow-hidden rounded-xl py-0 sm:h-[140px] sm:w-[200px] md:h-[160px] md:w-[250px] lg:h-[190px] lg:w-[270px] bg-[#0E1016]">
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className="h-20 w-20 rounded-lg"
      />
      <div className="absolute bottom-3 text-center">
        <p className="text-white text-sm sm:text-base font-roboto-mono">
          {name}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
