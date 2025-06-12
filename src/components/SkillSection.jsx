import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoRedux,
  BiLogoGithub,
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
import { motion } from "framer-motion";

const SkillSection = () => {
  return (
    <section id="skills" className="min-h-screen bg-black pt-10">
      <div className="flex flex-col mx-auto min-h-[70vh] items-center justify-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, type: "spring" }}
          className="text-5xl lg:text-[70px] leading-tight font-semibold 
          lg:leading-[1.5] max-w-[60ch] text-center mx-auto mb-10"
          style={{
            background: "linear-gradient(90deg, #fafafa, #7e22ce)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Technologies
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, type: "spring" }}
          className="flex flex-wrap items-center justify-center gap-8 p-5"
        >
        <div className="flex flex-wrap justify-center gap-10">
          <BiLogoReact className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          <BiLogoJavascript className="cursor-pointer text-[80px] text-yellow-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          <BiLogoTailwindCss className="cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          <BiLogoNodejs className="cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          <BiLogoTypescript className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          <BiLogoMongodb className="cursor-pointer text-[80px] text-green-900 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          <BiLogoRedux className="cursor-pointer text-[80px] text-purple-800 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          <BiLogoGithub className="cursor-pointer text-[80px] text-gray-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </div> 
         <div className="flex flex-wrap gap-10 justify-center">
            <DiHtml5 className="cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"  />
            <DiCss3 className="cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
            <DiPython className="cursor-pointer text-[80px] text-yellow-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
            <DiDjango className="cursor-pointer text-[80px] text-green-800 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
            <DiMysql className="cursor-pointer text-[80px] text-blue-700 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
            <DiGit className="cursor-pointer text-[80px] text-red-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
            <DiDocker className="cursor-pointer text-[80px] text-blue-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
            <DiJava className="cursor-pointer text-[80px] text-red-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default SkillSection;