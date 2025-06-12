import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-black text-white px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Get in Touch
        </h2>
        <p className="text-gray-400 text-lg mb-10">
          Whether you have a question, want to collaborate or just want to say hi,
          feel free to drop a message. I’ll try my best to get back to you!
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, type: "spring", delay: 0.2 }}
        className="max-w-2xl mx-auto space-y-6"
        action="https://formspree.io/f/YOUR_FORM_ID" // Replace with your Formspree ID or backend endpoint
        method="POST"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        ></textarea>
        <button
        type='submit'
        whileHover={{ scale: 1.03}}
        whileTap={{ scale: 0.97}}
        className='w-full h-10 px-4 py-2 bg-gradient-to-r from-violet-600 
        to-violet-400 hover:from-violet-700 hover:to-purple-700
        transition-all duration-300 rounded-lg shadow-md hover:shadow-lg hover:shadow-violet-600/50'
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;