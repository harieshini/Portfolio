import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "I COGNIZE AND BUILD - COLLABORATIVE, ENGAGING  AND REVELATING PROJECTS."
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={
                "   My passion lies in crafting software solutions that drive meaningful impact and innovation."
              }
            />
            
            <AnimatedBody
              text={
                "   I'm a Full Stack Developer , with avid interest in Data Analytics and working with Databases. Apart from coding, I spend my time in binge-reading comics,manga and expanding my music library with Indian rock and K-pop."
              }
              
            />
            
            <AnimatedBody
              text={
                "I'm currently working on some engaging projects and looking for opportunities, Feel free to reach out and connect!"
              }
            />
            
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"UNDERGRADUATE"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "2021-2025"
                }
              />
              <AnimatedBody
                text={
                  "Sona College of Technology, Salem"
                }
              />
              <AnimatedBody
                text={
                  "BE - CSE  | 8.8 CGPA "
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"HIGHER SECONDARY"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "2019-2021"
                }
              />
              <AnimatedBody
                text={
                  "St.Joseph's Matriculation Higher Secondary School, Salem"
                }
              />
              <AnimatedBody
                text={
                  "12th Grade - 94.4% | 10th Grade - 92.6%"
                }
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:-mt-0 lg:mt-28">
        <AnimatedBody
            text="SKILLS"
            className="absolute bottom-10 right-0 left-0 mx-auto w-[90%] text-center text-[20px] font-semibold uppercase text-[#e4ded7] sm:w-[500px] md:bottom-12 md:w-[550px] md:text-[20px] "
          />
          <SongCarousel />
        </div>
      </div>
    </section>
  );
};

export default About;
