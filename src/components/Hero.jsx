import {motion} from "framer-motion";
import Spline from "@splinetool/react-spline";


const Hero = () => { 
  return (
   <section id="home" className="min-h-screen bg-gradient-to-b from-violet-900 to-black
   flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10
   relative overflow-hidden">
    {/* Left Section*/}
    <div className="z-40 xl:mb-0 mb-[20%]">
        {/* <motion.h1 
        initial={{ opacity: 0, y: 80}}
        animate={{ opacity: 1, y: 0}}
        transition={{
            type:"spring",
            stiffness: 40,
            damping: 25,
            delay: 1.3,
            duration: 1.5,
        }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold z-10">
            Hi, I'm
        </motion.h1> */}
        <motion.h1 
        initial={{ opacity: 0, y: 80}}
        animate={{ opacity: 1, y: 0}}
        transition={{
            type:"spring",
            stiffness: 40,
            damping: 25,
            delay: 1.3,
            duration: 1.5,
        }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6">
           <span
           className="text-3xl md:text-4xl lg:text-5xl font-bold z-10"
           > Hi, I'm </span><br/>  Nityananda K
         </motion.h1>
        <motion.p 
         initial={{ opacity: 0, y: 80}}
        animate={{ opacity: 1, y: 0}}
        transition={{
            type:"spring",
            stiffness: 40,
            damping: 25,
            delay: 1.8,
            duration: 1.5,
        }}
        className="text-xl md:text-1xl lg:text-2xl text-purple-200 max-w-2xl ">
           <strong>Full-Stack Developer |Aspiring Data Scientist | Python, SQL & Statistical Analysis</strong> <br />       
           Delivering responsive, secure, and maintainable software solutions while leveraging data-driven approaches to build intelligent, efficient, and impactful outcomes — guided by strong vision, adaptability, and dedication to excellence.
        </motion.p>
    </div>
    {/* right side */}
    <Spline className="absolute xl:right-[-28%] 
    right-0 top-[-20%] lg:top-0"
    scene="https://prod.spline.design/DU4-64iZOGizxA5y/scene.splinecode" />
     


   </section>
  
  )
}

export default Hero
