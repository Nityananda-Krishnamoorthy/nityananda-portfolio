import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoRedux,
  BiLogoGithub,
  BiLogoFigma,
  BiLogoAndroid,
  BiLogoApple,
} from "react-icons/bi";
import {
  DiHtml5,
  DiCss3,
  DiPython,
  DiDjango,
  DiMysql,
  DiGit,
  DiDocker,
  DiJava,
} from "react-icons/di";
import { SiSwift, SiXcode, SiKotlin } from "react-icons/si";
import { motion } from "framer-motion";

const SkillSection = () => {
  return (
    <section id="skills" className="min-h-screen bg-black pt-10">
      <div className="flex flex-col mx-auto min-h-[70vh] items-center justify-center px-4">
        {/* Section Title */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, type: "spring" }}
          className="text-5xl lg:text-[70px] leading-tight font-semibold 
          lg:leading-[1.5] max-w-[60ch] text-center mx-auto mb-16"
          style={{
            background: "linear-gradient(90deg, #fafafa, #7e22ce)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Technologies
        </motion.h1>

        {/* Icon Groups */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, type: "spring" }}
          className="flex flex-col items-center justify-center gap-16"
        >
          {/* Row 1 - Frontend */}
          <div className="flex flex-wrap justify-center gap-14">
            <BiLogoReact className="tech-icon cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
            <BiLogoJavascript className="tech-icon cursor-pointer text-[80px] text-yellow-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
            <BiLogoTypescript className="tech-icon cursor-pointer text-[80px] text-sky-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
            <DiHtml5 className="tech-icon cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
            <DiCss3 className="tech-icon cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
            <BiLogoTailwindCss className="tech-icon cursor-pointer text-[80px] text-blue-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
            <BiLogoRedux className="tech-icon cursor-pointer text-[80px] text-purple-800 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          </div>

          {/* Row 2 - Backend / DevOps / DB */}
          <div className="flex flex-wrap justify-center gap-14">
            <BiLogoNodejs className="tech-icon cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
            <BiLogoMongodb className="tech-icon cursor-pointer text-[80px] text-green-800 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
            <DiPython className="tech-icon cursor-pointer text-[80px] text-yellow-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
            <DiDjango className="tech-icon cursor-pointer text-[80px] text-green-700 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
            <DiMysql className="tech-icon cursor-pointer text-[80px] text-blue-700 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
            <DiGit className="tech-icon cursor-pointer text-[80px] text-red-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
            <DiDocker className="tech-icon cursor-pointer text-[80px] text-blue-300 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
            <BiLogoGithub className="tech-icon cursor-pointer text-[80px] text-gray-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          </div>
          {/* Row 3 - Mobile + UI/UX */}
          <div className="flex flex-wrap justify-center gap-14">
            <BiLogoAndroid className="tech-icon cursor-pointer text-[80px] text-green-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
            <BiLogoApple className="tech-icon cursor-pointer text-[80px] text-gray-200 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
            <SiSwift className="tech-icon cursor-pointer text-[80px] text-orange-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[100px]" />
            <SiKotlin className="tech-icon cursor-pointer text-[80px] text-purple-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[100px]" />
            <DiJava className="tech-icon cursor-pointer text-[80px] text-red-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
            <BiLogoFigma className="tech-icon cursor-pointer text-[80px] text-pink-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
            <SiXcode className="tech-icon cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillSection;