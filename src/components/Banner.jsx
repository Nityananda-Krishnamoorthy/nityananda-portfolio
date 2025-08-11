import { motion } from "framer-motion";
import avatar from "../assets/images/avatar.png";
import avatar1 from "../assets/images/avatar1.jpg";
import { ButtonPrimary } from "./Button";
import { FiDownload } from "react-icons/fi";
import { CV } from "../utils/util";

const Banner = () => {
  return (
    <section id="about" className="min-h-screen bg-black pt-[100px]">
  <div className="px-4 mx-auto lg:px-8 xl:max-w-6xl">

    {/* Heading - its own block */}
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
      About Me - Nityananda K
    </motion.h1>

    {/* Flex container for image and content */}
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
      
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.6, type: "spring" }}
      >
        <figure
          className="flex-1 lg:max-w-[600px] xl:max-w-[700px] bg-gradient-to-t 
          from-violet-400 via-25% via-violet-400/40 
          to-65% rounded-[60px] overflow-hidden"
        >
          <img
            src={avatar}
            width={656}
            height={800}
            alt="Nityananda K"
            className="w-full h-auto object-cover"
          />
        </figure>
      </motion.div>

      {/* Text content */}
      <motion.div
        className="z-40 xl:mb-0 mb-[20%]"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, type: "spring" }}
      >
        {/* Status */}
        <div className="flex items-center gap-3">
          <figure className="img-box w-9 h-9 rounded-lg overflow-hidden">
            <img
              src={avatar1}
              alt="Nityananda K Portrait"
              className="w-full h-full object-cover"
            />
          </figure>

          <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
              <span className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </span>
            Available for work
          </div>
        </div>

        {/* Paragraph */}
        <p
          className="text-2xl lg:text-[20px] leading-tight font-semibold 
            lg:leading-[1.4] max-w-[60ch]
            sm:max-w-[50ch] lg:max-w-[80ch] mt-5 mb-8 lg:mb-10"
          style={{
            background: "linear-gradient(90deg, #fafafa, #7e22ce)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
        I specialize in developing fast, secure, and scalable full-stack web applications using modern technologies like <strong className="font-semibold">React</strong>, <strong className="font-semibold">Node.js</strong>, <strong className="font-semibold">Spring Boot</strong>, and <strong className="font-semibold">MongoDB</strong>. <br /><br />
With a strong eye for UI/UX design and a solid grasp of back-end architecture, I deliver seamless, high-performance user experiences that combine visual appeal with robust functionality. From portfolio websites to SaaS platforms and enterprise dashboards, I focus on building solutions that are reliable, efficient, and easy to maintain.
<br /><br />
Driven by continuous learning and innovation, I bring dedication, problem-solving skills, and attention to detail to every project — turning ideas into impactful digital products.


          </p>

        {/* Button */}
      <div className="flex items-center gap-3">
  <a
    href={ CV }
    target="_blank"
    rel="noopener noreferrer"
  >
    <ButtonPrimary label="Download CV" icon={<FiDownload />} />
  </a>
</div>
      </motion.div>
    </div>
  </div>
</section>
  );
};

export default Banner;
