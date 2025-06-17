import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, type: "spring" }}
      className="bg-black text-white py-6"
    >
        
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Name / Branding */}
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl font-semibold tracking-wider"
        >
           <p className="text-sm">© {new Date().getFullYear()} Nityananda. All rights reserved.</p>
 
        </motion.h1>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex gap-6 mt-4 md:mt-0"
        >
          {[
            {
              icon: <FaGithub />,
              link: "https://github.com/Nityananda-Krishnamoorthy",
              color: "hover:text-purple-500",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/nityananda-krishnanmoorthy",
              color: "hover:text-blue-500",
            },
            {
              icon: <FaEnvelope />,
              link: "mailto:contactmenitish06@gmail.com",
              color: "hover:text-red-500",
            },
          ].map(({ icon, link, color }, index) => (
            <motion.a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              className={`text-2xl transition duration-300 ${color}`}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;